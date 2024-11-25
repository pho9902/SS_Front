import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { io, Socket } from "socket.io-client";

const VideoCall = () => {
  const socketRef = useRef<Socket>();
  const myVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const pcRef = useRef<RTCPeerConnection>();
  const isAdmin = sessionStorage.getItem('username') === 'realad'

  const { roomName } = useParams();

  const remote = () => {
    try {
        if (!(pcRef.current && socketRef.current)) {
          return;
        }
    // 구 addStream 현 track 이벤트 
    if(!isAdmin) {
      pcRef.current.ontrack = (e) => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = e.streams[0];
        }
      };
    }
    } catch (e) {
      console.error(e)
    }
     
  }

  const getMedia = async () => {
    try {
       // 자신이 원하는 자신의 스트림정보
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      })

      if (myVideoRef.current) {
        myVideoRef.current.srcObject = stream;
      }

      if (!(pcRef.current && socketRef.current)) {
        return;
      }
       // 스트림을 peerConnection에 등록
      stream.getTracks().forEach((track) => {
        if (!pcRef.current) {
          return;
        }
      pcRef.current.addTrack(track, stream);
        
      });
    } catch (e) {
      console.error(e);
    }
  };
      
  const createOffer = async () => {
    console.log("create Offer");
    if (!(pcRef.current && socketRef.current)) {
      return;
    }
    try {
      // offer 생성
      const sdp = await pcRef.current.createOffer();
      // 자신의 sdp로 LocalDescription 설정
      pcRef.current.setLocalDescription(sdp);
      console.log("sent the offer");
        // offer 전달
      socketRef.current.emit("offer", sdp, roomName);
    } catch (e) {
      console.error(e);
    }
  };

  const createAnswer = async (sdp: RTCSessionDescription) => {
    // sdp : PeerA에게서 전달받은 offer
    console.log("createAnswer");
    if (!(pcRef.current && socketRef.current)) {
      return;
    }

    try {
      // PeerA가 전달해준 offer를 RemoteDescription에 등록해 줍시다.
      pcRef.current.setRemoteDescription(sdp);

      // answer생성해주고
      const answerSdp = await pcRef.current.createAnswer();

      // answer를 LocalDescription에 등록해 줍니다. (PeerB 기준)
      pcRef.current.setLocalDescription(answerSdp);

      console.log("sent the answer");
      socketRef.current.emit("answer", answerSdp, roomName);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    // socketRef.current = io("http://3.88.191.23:8080");
    socketRef.current = io(process.env.REACT_APP_DOMAIN);
    
    pcRef.current = new RTCPeerConnection({
      iceServers: [
        {
          urls: "stun:stun.l.google.com:19302",
        },
      ],
    });
    // 기존 유저가 있고, 새로운 유저가 들어왔다면 오퍼생성
    socketRef.current.on("all_users", (allUsers: Array<{ id: string }>) => {
      if (allUsers.length > 0) {
        createOffer();
      }
    });

    // offer를 전달받은 PeerB만 해당됩니다
    // offer를 들고 만들어둔 answer 함수 실행
    socketRef.current.on("getOffer", (sdp: RTCSessionDescription) => {
      console.log("recv Offer");
      createAnswer(sdp);
    });

    // answer를 전달받을 PeerA만 해당됩니다.
    // answer를 전달받아 PeerA의 RemoteDescription에 등록
    socketRef.current.on("getAnswer", (sdp: RTCSessionDescription) => {
      console.log("recv Answer");
      if (!pcRef.current) {
        return;
      }
      pcRef.current.setRemoteDescription(sdp);
    });

    // 서로의 candidate를 전달받아 등록
    socketRef.current.on("getCandidate", async (candidate: RTCIceCandidate) => {
      if (!pcRef.current) {
        return;
      }

      await pcRef.current.addIceCandidate(candidate);
    });
    // 마운트시 해당 방의 roomName을 서버에 전달
    socketRef.current.emit("join_room", {
      room: roomName,
    });

    getMedia();
    remote();

    // iceCandidate 이벤트 
    pcRef.current.onicecandidate = (e) => {
      if (e.candidate) {
        if (!socketRef.current) {
          return;
        }
        console.log("recv candidate");
        socketRef.current.emit("candidate", e.candidate, roomName);
      }
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
      if (pcRef.current) {
        pcRef.current.close();
      }
    };
  }, [socketRef, pcRef, getMedia, remote]);

  return (
    <div>
      <video
        id="video"
        style={{
          width: 240,
          height: 370,
          backgroundColor: "black",
        }}
        ref={isAdmin ? myVideoRef : remoteVideoRef}
        autoPlay
      />
    </div>
  );
};

export default VideoCall;
