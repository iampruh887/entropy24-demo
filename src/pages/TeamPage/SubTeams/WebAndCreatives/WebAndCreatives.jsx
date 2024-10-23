
import "./WebAndCreatives.css"; // Ensure this path matches your stylesheet
import CardList from "./CardList"; // Ensure this path matches where your CardList component is located
import ScrambleText from "../../../../components/scramble/Scramble";
import Navbar from "../../../Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>

        <div className="header_wnc">
        <div className="header1_wnc"><ScrambleText className="header1_wnc">Web & Creatives</ScrambleText></div>
        </div>
      <div className="stars">
        <div className="stars1"></div>  
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      <div className="bodyCard">
        <CardList />
      </div>
    </div>
  );
}

export default App;
