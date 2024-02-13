import "./App.css";
import MainContent from "./components/MainContent";
import TopNav from "../src/modules/TopNav";
import { createContext, useState } from "react";

export const SideNavContext = createContext()
export const ToggleSideNav = createContext();

export const ToolBarContext = createContext()
export const ToggleToolBar = createContext();

function App() {
  const [isSideNavToggled, setIsMobile] = useState(false);
  const [isToolBarToggled, setIsToolBarToggled] = useState(false);

  const toggleSideNav = () => {
    setIsMobile(!isSideNavToggled)
    console.log(isSideNavToggled)
  }

  const toggleToolBar = () => {
    setIsToolBarToggled(!isToolBarToggled)
    console.log(isToolBarToggled)
  }

  return (
    <SideNavContext.Provider value={isSideNavToggled}>
      <ToggleSideNav.Provider value={toggleSideNav}>
        <ToolBarContext.Provider value={isToolBarToggled}>
          <ToggleToolBar.Provider value={toggleToolBar}>
            <div className="app-container">
              <TopNav />
              <MainContent />
            </div>
          </ToggleToolBar.Provider>
        </ToolBarContext.Provider>

      </ToggleSideNav.Provider>
    </SideNavContext.Provider>
  );
}

export default App;