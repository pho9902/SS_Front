import * as S from "./style";
import { TbBrandCoinbase } from "react-icons/tb";
import { LuJoystick } from "react-icons/lu";
import { FaGift } from "react-icons/fa6";
import { MdOutlineContactSupport } from "react-icons/md";


export default function Main() {
  return <S.Wrap>
    <S.HeaderBox>
      <S.LogoImg src="logo/logo3.png" alt="logo3" />
      </S.HeaderBox>

    <S.SndContainer>
      <S.BoxWrapper>
        <S.IntroBox>
          <TbBrandCoinbase size={37} />
          <S.ExplainBox>코인 충전</S.ExplainBox>
        </S.IntroBox>
        <S.IntroBox>
          <LuJoystick size={37} />
          <S.ExplainBox>게임하러 가기</S.ExplainBox>
        </S.IntroBox>
      </S.BoxWrapper>
      <S.BoxWrapper>
        <S.IntroBox>
          <FaGift size={37} />
          <S.ExplainBox>경품 리스트</S.ExplainBox>
        </S.IntroBox>
        <S.IntroBox>
          <MdOutlineContactSupport size={37} />
          <S.ExplainBox>문의</S.ExplainBox>
        </S.IntroBox>
      </S.BoxWrapper>
    </S.SndContainer>
  
  </S.Wrap>;
}
