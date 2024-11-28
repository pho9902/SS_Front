import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as S from "./style";

import Main from "../Main";
import Game from "../Game";
import * as Auth from "../Auth";
import Footer from "../Footer";
import Coin from "../Coin";
import List from "../List";
import Admin from "../Admin";

export default function App() {
  return (
    <BrowserRouter>
      <S.GlobalWrap>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/regist" element={<Auth.Regist />} />
          <Route path="/game/:roomName" element={<Game />} />
          <Route path="/admin/:roomName" element={<Admin />} />
          <Route path="/login" element={<Auth.Login />} />
          <Route path="/coin" element={<Coin />} />
          <Route path="/list" element={<List />} />
          <Route path="" element={<Footer />} />
        </Routes>

        <Footer />
      </S.GlobalWrap>
    </BrowserRouter>
  );
}
