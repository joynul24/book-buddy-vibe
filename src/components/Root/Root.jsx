import { Outlet } from "react-router-dom";
import Navber from "../Pages/Navber/Navber";
import Footer from "../Pages/Footer/Footer";

export default function Root() {
  return (
    <div>
    <div className="max-w-6xl mx-auto">
      <Navber></Navber>
      <div className="min-h-[calc(100vh-373px)]">
        <Outlet></Outlet>
      </div>
    </div>
      <Footer></Footer>
    </div>
  )
}
