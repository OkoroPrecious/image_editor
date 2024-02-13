import { useContext, useState } from "react";
import Brand from "../components/Brand";
import lady from "../images/lady.png";
import { SideNavContext, ToggleSideNav, ToggleToolBar, ToolBarContext } from "../App";

const TopNav = () => {
  const [isClicked, setIsClicked] = useState(false)
  const toggleMenu = () => {
    setIsClicked(!isClicked);
  }

  const isSideNavToggled = useContext(SideNavContext)
  const toggleSideNav = useContext(ToggleSideNav)

  const isToolBarToggled = useContext(ToolBarContext)
  const toggleToolBar = useContext(ToggleToolBar)

  return (
    <div className="top-nav">
      <Brand />
      <svg onClick={toggleMenu} className="toggle-button" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round" />
        <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round" />
        <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round" />
      </svg>
      <div className="top-nav-controls">
        <button><span>NEW</span></button>
        <button>    <span>SAVE OR DOWNLOAD</span> </button>
        <img src={lady} alt="Logged In User" />
        <svg
          width="12"
          height="9"
          viewBox="0 0 18 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.65088 9L-0.00937541 0.75H17.3111L8.65088 9Z"
            fill="#2B3595"
          />
        </svg>



      </div>
      <ul className={`mobile-menu-${isClicked}`}>
        <li>NEW</li>
        <li>SAVE OR DOWNLOAD</li>
        <li onClick={toggleSideNav}>{isSideNavToggled === true ? "HIDE" : "SHOW"} PRIMARY TOOLS</li>
        <li onClick={toggleToolBar}>{isToolBarToggled === true ? "HIDE" : "SHOW"}SECONDARY TOOLS</li>
      </ul>
    </div>
  );
};

export default TopNav;
