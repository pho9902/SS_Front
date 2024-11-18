import { useParams } from "react-router-dom";
import Controler from "./Controler"

export default function Machine() {
  const machineNum = useParams().machineNum;

  return <div>
    {machineNum}번 기기
    <Controler />
    </div>;
}
