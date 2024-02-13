import "./App.css";
import MainContent from "./components/MainContent";
import TopNav from "../src/modules/TopNav";

function App() {
  return (
    <div className="app-container">
      <TopNav />
      <MainContent />
    </div>
  );
}

export default App;
