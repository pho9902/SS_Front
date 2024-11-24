import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";
import { Auth } from "../../api";
import { useEffect, useRef, useState } from "react";
import { MdOutlineVisibilityOff } from "react-icons/md";

export default function Login() {
  const [showPw, setShowPw] = useState<boolean>(false);
  const navigate = useNavigate();
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function authLogin(id: string | undefined, password: string | undefined) {
    if(!id || !password) {
      alert('아이디 비밀번호를 확인해주세요')
      return;
    }
    if(id.length > 7 || id.length < 1) {
      alert('아이디는 2글자 이상 7글자 이하 알파벳, 숫자 조합입니다.')
      return;
    }
    if(password.length < 0 || password.length > 8) {
      alert('비밀번호는 1글자 이상 8글자 이하 알파벳, 숫자, 특수문자의 조합입니다.')
      return;
    }
    Auth.login(id, password).then(res => {
      sessionStorage.setItem("accessToken", res.data.accessToken);
      sessionStorage.setItem("username", id);
      navigate('/')    
      navigate(0)
    }).catch(err => console.log(err))
  }

  useEffect(() => {
    if(sessionStorage.getItem('accessToken')) {
      alert('이미 로그인 된 사용자 입니다.')
      navigate('/')
    }
  }, [])

  return (
    <S.Body>
      <S.Wrap>
        <S.Title>로그인</S.Title>
        <S.FormBox>
          <S.Label>ID</S.Label>
          <S.Input placeholder="ID" ref={idRef}></S.Input>
        </S.FormBox>
        <S.FormBox>
          <S.Label>PassWord</S.Label>
          <S.PwBox>
            <S.Input type={showPw ? "text" : "password"} placeholder="PassWord" ref={passwordRef}></S.Input>
            <MdOutlineVisibilityOff onClick={() => setShowPw(!showPw)} />
          </S.PwBox>
        </S.FormBox>
        <S.BtnBox>
          <S.Btn onClick={() => authLogin(idRef.current?.value, passwordRef.current?.value)}>로그인</S.Btn>
          <Link to="/regist" style={{ textDecoration: "none" }}>
            <S.Btn>회원가입</S.Btn>
          </Link>
        </S.BtnBox>
      </S.Wrap>
    </S.Body>
  );
}
