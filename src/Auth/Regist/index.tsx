import { useNavigate } from "react-router-dom";
import { Auth } from "../../api";
import * as S from "./style";
import { useRef, useState } from "react";
import { MdOutlineVisibilityOff } from "react-icons/md";

interface RegisterInfo {
  username: string | undefined;
  password: string | undefined;
  adress: string | undefined;
  adress_detail: string | undefined;
}

export default function Regist() {
  const [showPw, setShowPw] = useState<boolean>(false);
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const adressRef = useRef<HTMLInputElement>(null);
  const adressDetailRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  function authRegister(info: RegisterInfo) {
    if(!info.username || !info.password) {
      alert('아이디 비밀번호를 확인해주세요')
      return;
    }
    if(info.username.length > 7 || info.username.length < 1) {
      alert('아이디는 2글자 이상 7글자 이하 알파벳, 숫자 조합입니다.')
      return;
    }
    if(info.password.length < 0 || info.password.length > 8) {
      alert('비밀번호는 1글자 이상 8글자 이하 알파벳, 숫자, 특수문자의 조합입니다.')
      return;
    }
    Auth.register(info).then(res => {
      navigate('/login')    
      navigate(0)
  }).catch(err => console.log(err))
  }
  return (
    <S.Body>
      <S.Wrap>
        <S.Title>회원가입</S.Title>
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
        <S.FormBox>
          <S.Label>주소</S.Label>
          <S.Input placeholder="시, 구, 동" ref={adressRef}></S.Input>
        </S.FormBox>
        <S.FormBox>
          <S.Label>상세주소</S.Label>
          <S.Input placeholder="상세주소" ref={adressDetailRef}></S.Input>
        </S.FormBox>
        <S.BtnBox>
          <S.Btn
            onClick={() => {
                authRegister({
                  username: idRef.current?.value,
                  password: passwordRef.current?.value,
                  adress: adressRef.current?.value,
                  adress_detail: adressDetailRef.current?.value
                })
              }
          }
          >
            회원가입
          </S.Btn>
        </S.BtnBox>
      </S.Wrap>
    </S.Body>
  );
}
