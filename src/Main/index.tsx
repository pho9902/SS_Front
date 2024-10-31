import { useState } from "react";
import * as Auth from "../Auth";

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        <h3>헤더</h3>
        <div onClick={() => setIsOpen(!isOpen)}>로그인/회원가입</div>
      </div>

      {isOpen && <Auth.Login />}
    </div>
  );
}
