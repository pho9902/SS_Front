import { Auth } from "../../api";
import * as S from "./style";
import { useRef, useState } from "react";

interface RegisterInfo {
  username: string | undefined;
  password: string | undefined;
  adress: string | undefined;
  adress_detail: string | undefined;
}

export default function Regist() {
  const [isIdWrong, setIsIdWrong] = useState<boolean>(false);
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const adressRef = useRef<HTMLInputElement>(null);
  const adressDetailRef = useRef<HTMLInputElement>(null);

  function authRegister(info: RegisterInfo) {
    Auth.register(info).then(res => console.log(res)).catch(err => console.log(err))
  }
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
      <S.FormBox>
        <S.Label>주소</S.Label>
        <S.Input ref={adressRef}></S.Input>
      </S.FormBox>
      <S.FormBox>
        <S.Label>상세주소</S.Label>
        <S.Input ref={adressDetailRef}></S.Input>
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
  );
}
