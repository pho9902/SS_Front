import { useState } from "react";
import * as Auth from "../Auth";
import * as S from "./style";

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrap>
      <S.Header>
        <S.Logo>헤더</S.Logo>
        <S.Auth onClick={() => setIsOpen(!isOpen)}>로그인/회원가입</S.Auth>
      </S.Header>

      <S.Choice>기기선택</S.Choice>
      {isOpen && <Auth.LoginModal />}
    </S.Wrap>
  );
}
