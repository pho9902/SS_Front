import * as S from "./style";
import { TbBrandCoinbase } from "react-icons/tb";
import { LuJoystick } from "react-icons/lu";
import { FaGift } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";


export default function Main() {
  return <S.Wrap>
    <S.HeaderBox>
      <S.LogoImg src="logo/logo3.png" alt="logo3" />
      </S.HeaderBox>

    <S.SndContainer>
      <S.BoxWrapper>
      <Link to="/coin" style={{ margin: '14px', borderRadius: '10%', textDecoration: "none", color: '#042626', backgroundColor: 'white'}}>
          <S.IntroBox>
            <TbBrandCoinbase size={37} />
            <S.ExplainBox>코인 충전</S.ExplainBox>
          </S.IntroBox>
        </Link>
        <Link to="/game/1" style={{ margin: '14px', borderRadius: '10%',  textDecoration: "none", color: '#042626', backgroundColor: 'white'}}>
          <S.IntroBox>
            <LuJoystick size={37} />
            <S.ExplainBox>게임하러 가기</S.ExplainBox>
          </S.IntroBox>
        </Link>
      </S.BoxWrapper>
      <S.BoxWrapper>
        <Link to="/list" style={{ margin: '14px', borderRadius: '10%',  textDecoration: "none", color: '#042626', backgroundColor: 'white'}}>
          <S.IntroBox>
            <FaGift size={37} />
            <S.ExplainBox>경품 리스트</S.ExplainBox>
          </S.IntroBox>
        </Link>
        <div onClick={(e) => {
              window.open('https://store.kakao.com/kakaofriends')
              e.stopPropagation();
            }
          } style={{ margin: '14px', borderRadius: '10%',  textDecoration: "none", color: '#042626', backgroundColor: 'white'}}>
          <S.IntroBox>
            <IoCartOutline size={37} />
            <S.ExplainBox>구매</S.ExplainBox>
          </S.IntroBox>
        </div>
      </S.BoxWrapper>
    </S.SndContainer>
  
  </S.Wrap>;
}
