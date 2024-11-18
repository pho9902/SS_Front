import * as S from "./style";

export default function Main() {
  return <S.Wrap>
    <S.HeaderBox>프로젝트명?</S.HeaderBox>
    <S.BoxWrapper>
      <S.IntroBox>coin</S.IntroBox>
      <S.IntroBox>게임</S.IntroBox>
    </S.BoxWrapper>
    <S.BoxWrapper>
      <S.IntroBox>문의</S.IntroBox>
      <S.IntroBox>경품리스트</S.IntroBox>
    </S.BoxWrapper>

    <S.ExplainBox>
      여기다 게임 설명 글 or 이미지 
    </S.ExplainBox>
  </S.Wrap>;
}
