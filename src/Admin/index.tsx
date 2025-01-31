import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { io, Socket } from "socket.io-client";

export default function Admin() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const myVideoRef = useRef<HTMLVideoElement>(null);
  const pcRef = useRef<RTCPeerConnection>();
  const navigate = useNavigate()

  const { roomName } = useParams();

  const getMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      if (myVideoRef.current) {
        myVideoRef.current.srcObject = stream;
      }
      if (!(pcRef.current && socket)) {
        return;
      }
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
    if (!(pcRef.current && socket)) {
      return;
    }
    try {
      const sdp = await pcRef.current.createOffer();
      pcRef.current.setLocalDescription(sdp);
      console.log("sent the offer");
      socket.emit("offer", sdp, roomName);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if(sessionStorage.getItem('username') !== 'realad') {
      alert('관리자만 접근 가능한 페이지입니다.')
      navigate('/')
    }
    // setSocket(io("http://3.88.191.23:8080"))
    setSocket(io(process.env.REACT_APP_DOMAIN))

  }, [setSocket])
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

    socket.on("all_users", (allUsers: Array<{ id: string }>) => {
      if (allUsers.length > 0) {
        console.log(1)
        createOffer();
      }
    });

    socket.on("getAnswer", (sdp: RTCSessionDescription) => {
      console.log("recv Answer");
      if (!pcRef.current) {
        return;
      }
      pcRef.current.setRemoteDescription(sdp);
    });
}

    getMedia();

    return () => {
      if (socket) {
        socket.disconnect();
      }
      if (pcRef.current) {
        pcRef.current.close();
      }
    };
  }, [socket, pcRef]);

  return (
    <div>
      <video
        id="remotevideo"
        style={{
          width: '100%',
          backgroundColor: "white",
          border: '1px solid red'
        }}
        ref={myVideoRef}
        muted={true}
        autoPlay={true} 
        playsInline={true}
        controls={false}
        // loop={false}
      />
    </div>
  );
};
