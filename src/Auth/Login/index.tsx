import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div>Form 인풋 인풋</div>
      <button>로그인</button>
      <div>소셜로그인?</div>
      <Link to="/regist">회원가입페이지로</Link>
    </div>
  );
}
