import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import { Regist } from "./Auth";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/regist" element={<Regist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
