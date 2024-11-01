import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as S from "./style";
import Main from "../Main";
import { Regist } from "../Auth";
import Choice from "../Choice";
import Machine from "../Machine";
import * as Auth from "../Auth";
import Footer from "../Footer";
import MainLayout from "./MainLayout";

export default function App() {
  return (
    <S.GlobalWrap>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/regist" element={<Regist />} />
            <Route path="/choice" element={<Choice />} />
            <Route path="/machine/:machineNum" element={<Machine />} />
            <Route path="/login" element={<Auth.Login />} />
          </Route>
          {/* <Route></Route>
          게임진행 */}
        </Routes>
      </BrowserRouter>
    </S.GlobalWrap>
  );
}
