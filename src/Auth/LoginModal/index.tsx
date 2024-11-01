import { Link } from "react-router-dom";
import * as S from "./style";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoginModal({ setIsOpen }: Props) {
  return (
    <S.Wrap onClick={() => setIsOpen(false)}>
      <S.Body>
        <div>Form 인풋 인풋</div>
        <button>로그인</button>
        <div>소셜로그인?</div>
        <Link to="/regist">회원가입페이지로</Link>
      </S.Body>
    </S.Wrap>
  );
}
