import { Outlet } from "react-router-dom";
import Footer from "../Footer";

export default function MainLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
