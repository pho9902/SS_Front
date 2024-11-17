import { Link } from "react-router-dom";
import * as S from "./style";
import { Auth } from "../../api";
import { useState } from "react";

export default function Login() {
  const [id, setId ] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function authLogin(id: string, password: string) {
    console.log(id, password)
    Auth.login(id, password).then(res => console.log(res)).catch(err => console.log(err))
  }

  return (
    <S.Wrap>
      <S.Title>로그인</S.Title>
      <S.FormBox>
        <S.Label>ID</S.Label>
        <S.Input onChange={(e) => setId(e.target.value)}></S.Input>
      </S.FormBox>
      <S.FormBox>
        <S.Label>PassWord</S.Label>
        <S.Input onChange={(e) => setPassword(e.target.value)}></S.Input>
      </S.FormBox>
      <S.BtnBox>
        <S.Btn onClick={() => {authLogin(id, password)
        }}>로그인</S.Btn>
        <Link to="/regist" style={{ textDecoration: "none" }}>
          <S.Btn>회원가입</S.Btn>
        </Link>
      </S.BtnBox>
    </S.Wrap>
  );
}
