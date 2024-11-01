import { Link } from "react-router-dom";
import * as S from "./style";

export default function Footer() {
  return (
    <S.Footer>
      <Link to="/login">
        <S.EachFooterBtn>로그인</S.EachFooterBtn>
        {/*로그인 댓으면 마이페이지로 바꿈 */}
      </Link>
      <Link to="/choice">
        <S.EachFooterBtn>기기선택</S.EachFooterBtn>
      </Link>
      <Link to="/">
        <S.FooterHomeBtn>홈</S.FooterHomeBtn>
      </Link>
      <Link to="/list">
        <S.EachFooterBtn>경품리스트</S.EachFooterBtn>
      </Link>
      <Link to="/contact">
        <S.EachFooterBtn>문의</S.EachFooterBtn>
      </Link>
    </S.Footer>
  );
}
