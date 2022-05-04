import logo from "./logo.svg";
import "./App.css";
import Base from "./Layout/Base/Base";

// Pages .........
import Launchpads from "./Pages/Launchpads/Launchpads";
function App() {
  return (
    <div className="App">
      <Base>
        <Launchpads></Launchpads>
      </Base>
    </div>
  );
}

export default App;
