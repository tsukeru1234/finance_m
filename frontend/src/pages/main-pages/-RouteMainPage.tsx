import { Outlet } from "@tanstack/react-router";
import "./RouteMainPage.css";

const RouteMainPage = () => {
  return (
    <div className="main-page-box">
      <div className="main-page-nav-box"></div>
      <div className="bg-main-page-top"></div>
      <div className="bg-main-page-bottom"></div>
      <div className="info-box">
        <Outlet />
      </div>
    </div>
  );
};

export default RouteMainPage;
