import { Link, useLocation } from "@tanstack/react-router";
import "./style/nav-bar-style.css";
import { useAtom } from "jotai";
import { navStatus } from "./model/storage";

const NavBar = () => {
  const [navS, setNavS] = useAtom(navStatus)
  const location = useLocation();
  const path = location.pathname;
  const selectBoxType = (path: string): string => {
    const pathArray = path.split("/");
    console.log(pathArray[pathArray.indexOf("main-pages") + 1]);
    return pathArray[pathArray.indexOf("main-pages") + 1];
  };
  const pageStyle = selectBoxType(path);
  return (
    <div className="nav-bar-main-box">
      <button onClick={() => setNavS((prev) => !prev)} className={`nav-status-button ${navS && "nav-active-status-button"}`}>{navS ? ">" : "<"}</button>
      <div className={`nav-icon ${!navS && "nav-bar-off"}`}>
        <span className="nav-icon-title">TRACK</span>
        <span className="nav-icon-title">YOUR</span>
        <span className="nav-icon-title">MONEY</span>
      </div>
      <div className={`nav-bar-title-box ${!navS && "nav-bar-off"}`}>
        <Link
          from={"/"}
          to={"main-pages/calculation"}
          className={`nav-bar-title ${
            pageStyle === "calculation"
              ? "nav-bar-title-select"
              : "nav-bar-title-non-select"
          }`}
        >
          Calculation
        </Link>
        <Link
          from={"/"}
          to={"main-pages/categories"}
          className={`nav-bar-title ${
            pageStyle === "categories"
              ? "nav-bar-title-select"
              : "nav-bar-title-non-select"
          }`}
        >
          Categories
        </Link>
        <Link
          from={"/"}
          to={"main-pages/calendar"}
          className={`nav-bar-title ${
            pageStyle === "calendar"
              ? "nav-bar-title-select"
              : "nav-bar-title-non-select"
          }`}
        >
          Calendar
        </Link>
        <div className={`nav-bar-select-box nav-bar-select-${pageStyle} ${!navS && "nav-bar-off"}`}>
          <div
            className={`nav-bar-select-bg nav-bar-animation ${!navS && "nav-bar-off"}`}
            key={pageStyle}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
