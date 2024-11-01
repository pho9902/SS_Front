import { Link } from "react-router-dom";
import * as S from "./style";

export default function Login() {
  return (
    <S.Wrap>
      <S.Title>로그인</S.Title>
      <S.FormBox>
        <S.Label>ID</S.Label>
        <S.Input></S.Input>
      </S.FormBox>
      <S.FormBox>
        <S.Label>PassWord</S.Label>
        <S.Input></S.Input>
      </S.FormBox>
      <S.BtnBox>
        <S.Btn>로그인</S.Btn>

        <Link to="/regist" style={{ textDecoration: "none" }}>
          <S.Btn>회원가입</S.Btn>
        </Link>
      </S.BtnBox>
    </S.Wrap>
  );
}
