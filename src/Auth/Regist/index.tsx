import * as S from "./style";
import { useRef, useState } from "react";

export default function Regist() {
  const sDummy = {
    id: "aa1234",
    pw: "as33",
  };
  const fDummy = [
    {
      id: "a",
      pw: "as33",
      // 아이디가 짧음 최소 2자
    },
    {
      id: "aasdfkjasdoifhjdsiofh123",
      pw: "as33",
      //아이디 김 최대 8자
    },
  ];

  const [isIdWrong, setIsIdWrong] = useState<boolean>(false);
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <S.Wrap>
      <S.Title>회원가입</S.Title>
      <S.FormBox>
        <S.Label>ID</S.Label>
        <S.Input ref={idRef}></S.Input>
      </S.FormBox>
      <S.FormBox>
        <S.Label>PassWord</S.Label>
        <S.Input ref={passwordRef}></S.Input>
      </S.FormBox>
      <div>주소</div>
      <S.BtnBox>
        <S.Btn
          onClick={() => {
            console.log(idRef.current?.value, passwordRef.current?.value);
          }}
        >
          회원가입
        </S.Btn>
      </S.BtnBox>
    </S.Wrap>
  );
}
