import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
