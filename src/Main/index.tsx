import { useState } from "react";
import * as Auth from "../Auth";
import * as S from "./style";
import { Link } from "react-router-dom";

export default function Main() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <S.Wrap>
      <S.Header>
        <S.Logo>헤더</S.Logo>
        <S.Auth onClick={() => setIsOpen(!isOpen)}>로그인/회원가입</S.Auth>
      </S.Header>
      <Link to="/choice">
        <S.Choice>기기선택</S.Choice>
      </Link>

      {isOpen && <Auth.LoginModal setIsOpen={setIsOpen} />}
    </S.Wrap>
  );
}
