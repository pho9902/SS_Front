import { Link } from "react-router-dom";
import * as S from "./style";
import { FaUser, FaGift } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import { useEffect, useState } from "react";
import { TbBrandCoinbase } from "react-icons/tb";
import { LuJoystick } from "react-icons/lu";

export default function Footer() {
  const [isToken, setIsToken] = useState(!sessionStorage.getItem('accessToken'))

  useEffect(() => {
    setIsToken(!sessionStorage.getItem('accessToken'))
  },[sessionStorage.getItem('accessToken'), isToken])
  
  return (
    <S.Footer>
      {isToken ? 
      <Link to="/login" style={{ textDecoration: "none", flexGrow:1 , color: '#042626'}}>
      <S.BtnBox>
        <FaUser />
        <S.EachFooterBtn>가입</S.EachFooterBtn>
      </S.BtnBox>
    </Link> : <Link to="/coin" style={{ textDecoration: "none", flexGrow:1 , color: '#042626'}}>
        <S.BtnBox>
          <TbBrandCoinbase />
          <S.EachFooterBtn>코인</S.EachFooterBtn>
        </S.BtnBox>
      </Link>
    }
      
      <Link to="/game/1" style={{ textDecoration: "none", flexGrow:1, borderLeft: "1px dotted lightgray", color: '#042626'}}>
        <S.BtnBox>
          <LuJoystick />
          <S.EachFooterBtn>게임</S.EachFooterBtn>
        </S.BtnBox>
      </Link>
      <Link to="/" style={{ textDecoration: "none", flexGrow:1, borderLeft: "1px dotted lightgray" , color: '#042626'}}>
        <S.BtnBox>
          <FaHome />
          <S.EachFooterBtn>메인</S.EachFooterBtn>
        </S.BtnBox>
      </Link>
      <Link to="/list" style={{ textDecoration: "none", flexGrow:1, borderLeft: "1px dotted lightgray" , color: '#042626'}}>
        <S.BtnBox>
          <FaGift />
          <S.EachFooterBtn>경품</S.EachFooterBtn>
        </S.BtnBox>
      </Link>
    </S.Footer>
  );
}
