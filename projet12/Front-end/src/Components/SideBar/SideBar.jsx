import React from "react";
import yogaLogo from "../../Images /yoga-logo.svg";
import swimmingLogo from "../../Images /swimming-logo.svg";
import bikeLogo from "../../Images /bike-logo.svg";
import dumbbellLogo from "../../Images /dumbbell-logo.svg";
import "./SideBar.css";

const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-filler"></div>
      <nav className="sidebar-nav">
        <a className="sidebar-nav-logo" href="/">
          <img src={yogaLogo} alt="Yoga Logo" />
        </a>
        <a className="sidebar-nav-logo" href="/">
          <img src={swimmingLogo} alt="Swimming Logo" />
        </a>
        <a className="sidebar-nav-logo" href="/">
          <img src={bikeLogo} alt="Bike Logo" />
        </a>
        <a className="sidebar-nav-logo" href="/">
          <img src={dumbbellLogo} alt="Dumbbell Logo" />
        </a>
      </nav>
      <p className="sidebar-text">Copyright, SportSee 2023</p>
    </aside>
  );
};

export default SideBar;
