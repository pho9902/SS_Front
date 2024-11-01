import * as S from "./style";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <S.Wrap>
      <S.Header>
        <S.Logo>헤더</S.Logo>
      </S.Header>
      <Link to="/choice">
        <S.Choice>기기선택</S.Choice>
      </Link>
    </S.Wrap>
  );
}
