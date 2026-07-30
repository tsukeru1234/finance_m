import { Outlet } from "@tanstack/react-router";
import "./RouteMainPage.css";
import NavBar from "../../widget/nav-bar/NavBar";

const RouteMainPage = () => {
  return (
    <div className="main-page-box">
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
