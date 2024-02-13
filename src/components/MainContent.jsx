import ImageCarousel from "../modules/ImageCarousel";
import SideNav from "../modules/SideNav";
import SideToolBar from "../modules/SideToolBar";
import Preview from "./Preview";

const MainContent = () => {
  return (
    <div className="main-container">
      <SideNav />
      <div className="carousel-container">
        <ImageCarousel />
        <Preview />
      </div>
      <SideToolBar />
    </div>
  );
};

export default MainContent;
