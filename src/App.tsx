import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import { Regist } from "./Auth";
import Choice from "./Choice";
import Machine from "./Machine";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/regist" element={<Regist />} />
          <Route path="/choice" element={<Choice />} />
          <Route path="/machine/:machineNum" element={<Machine />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
