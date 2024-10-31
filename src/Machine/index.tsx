import { useParams } from "react-router-dom";

export default function Machine() {
  const machineNum = useParams().machineNum;

  return <div>{machineNum}번 기기</div>;
}
