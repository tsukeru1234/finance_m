import { Link, useLocation } from "@tanstack/react-router";
import "./style/nav-bar-style.css";

const NavBar = () => {
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
      <div className="nav-icon">
        <span className="nav-icon-title">TRACK</span>
        <span className="nav-icon-title">YOUR</span>
        <span className="nav-icon-title">MONEY</span>
      </div>
      <div className="nav-bar-title-box hide-animation">
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
        <div className={`nav-bar-select-box nav-bar-select-${pageStyle}`}>
          <div
            className="nav-bar-select-bg nav-bar-animation"
            key={pageStyle}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
