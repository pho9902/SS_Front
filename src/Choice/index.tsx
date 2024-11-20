import Video from "../Video";
import * as S from "./style";
import { Link } from "react-router-dom";

export default function Choice() {
  return (
    <div>
      <h2>기기 선택</h2>
      <Video />
      <Link to="/machine/1">
        <S.EachMachine>1번기기</S.EachMachine>
      </Link>
    </div>
  );
}
