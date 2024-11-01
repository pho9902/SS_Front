import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as S from "./style";

import Main from "../Main";
import { Regist } from "../Auth";
import Choice from "../Choice";
import Machine from "../Machine";
import * as Auth from "../Auth";
import Footer from "../Footer";

export default function App() {
  return (
    <BrowserRouter>
      <S.GlobalWrap>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/regist" element={<Regist />} />
          <Route path="/choice" element={<Choice />} />
          <Route path="/machine/:machineNum" element={<Machine />} />
          <Route path="/login" element={<Auth.Login />} />
          <Route path="" element={<Footer />} />
        </Routes>

        <Footer />
      </S.GlobalWrap>
    </BrowserRouter>
  );
}
