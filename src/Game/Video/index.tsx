import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { io, Socket } from "socket.io-client";
import * as S from './style';

const VideoCall = () => {
  const [socket, setSocket] = useState<Socket | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null);
  const pcRef = useRef<RTCPeerConnection>();
  const { roomName } = useParams();

  const createAnswer = async (sdp: RTCSessionDescription) => {
    console.log("createAnswer");
    if (!(pcRef.current && socket)) {
      return;
    }

    try {
      pcRef.current.setRemoteDescription(sdp);
      const answerSdp = await pcRef.current.createAnswer();
      pcRef.current.setLocalDescription(answerSdp);

      console.log("sent the answer");
      socket.emit("answer", answerSdp, roomName);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    // setSocket(io("http://3.88.191.23:8080"))
    setSocket(io(process.env.REACT_APP_DOMAIN))
  },[setSocket])

  useEffect(() => {
    pcRef.current = new RTCPeerConnection({
      iceServers: [
        {
          urls: 'stun:stun.l.google.com:19302',
        },
        {
          urls: 'stun:stun1.l.google.com:19302',
        },
        {
          urls: 'stun:stun2.l.google.com:19302',
        },
        {
          urls: 'stun:stun3.l.google.com:19302',
        },
      ]
    });

    if(socket) {
    socket.emit("join_room", {
      room: roomName,
    });

    pcRef.current.onicecandidate = (e) => {
      if (e.candidate) {
        if (!socket) {
          return;
        }
        console.log("recv candidate");
        socket.emit("candidate", e.candidate, roomName);
      }
    };

    socket.on("getCandidate", async (candidate: RTCIceCandidate) => {
      if (!pcRef.current) {
        return;
      }

      await pcRef.current.addIceCandidate(candidate);
    });

    socket.on("getOffer", (sdp: RTCSessionDescription) => {
      console.log("recv Offer");
      createAnswer(sdp);
    });

    pcRef.current.ontrack = (e) => {
      if (videoRef.current) {
        videoRef.current.srcObject = e.streams[0];
      }
    };
  }

    return () => {
      if (socket) {
        socket.disconnect();
      }
      if (pcRef.current) {
        pcRef.current.close();
      }
    };
  }, [socket, pcRef])

  return (
    <S.Wrap>
      <video
        id="video"
        style={{
          width: '100%',
          height: '230px',
          backgroundColor: "black",
        }}
        ref={videoRef}
        muted={true}
        autoPlay={true} 
        playsInline={true}
        controls={false}
        // loop={false}
      />
    </S.Wrap>
  );
};

export default VideoCall;
