import { Link } from "react-router-dom";
import * as S from "./style";
import { FaUser, FaListOl, FaGift } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isToken, setIsToken] = useState(!sessionStorage.getItem('accessToken'))

  useEffect(() => {
    setIsToken(!sessionStorage.getItem('accessToken'))
  },[sessionStorage.getItem('accessToken'), isToken])
  
  return (
    <S.Footer>
      {isToken ? 
      <Link to="/login" style={{ textDecoration: "none" }}>
      <S.BtnBox>
        <FaUser />
        <S.EachFooterBtn>로그인</S.EachFooterBtn>
      </S.BtnBox>
    </Link> : <Link to="/mypage" style={{ textDecoration: "none" }}>
        <S.BtnBox>
          <FaUser />
          <S.EachFooterBtn>마이페이지</S.EachFooterBtn>
        </S.BtnBox>
      </Link>
    }
      
      <Link to="/choice" style={{ textDecoration: "none" }}>
        <S.BtnBox>
          <FaListOl />
          <S.EachFooterBtn>기기선택</S.EachFooterBtn>
        </S.BtnBox>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <S.BtnBox>
          <FaHome />
          <S.HomeBtnBox>홈</S.HomeBtnBox>
        </S.BtnBox>
      </Link>
      <Link to="/list" style={{ textDecoration: "none" }}>
        <S.BtnBox>
          <FaGift />
          <S.EachFooterBtn>경품리스트</S.EachFooterBtn>
        </S.BtnBox>
      </Link>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <S.BtnBox>
          <MdOutlineContactSupport />
          <S.EachFooterBtn>문의</S.EachFooterBtn>
        </S.BtnBox>
      </Link>
    </S.Footer>
  );
}
