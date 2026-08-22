import { Outlet } from "@tanstack/react-router";
import "./RouteMainPage.css";
import NavBar from "../../widget/nav-bar/NavBar";
import { useAtomValue } from "jotai";
import { navStatus } from "../../widget/nav-bar/model/storage";

const RouteMainPage = () => {
  const navS = useAtomValue(navStatus)
  return (
    <div className={`main-page-box ${ !navS && "nav-off"}`}>
      <div className="main-page-nav-box"><NavBar /></div>
      <div className="bg-main-page-top"></div>
      <div className="bg-main-page-bottom"></div>
      <div className="info-box">
        <Outlet />
      </div>
    </div>
  );
};

export default RouteMainPage;
