import "./App.css";
import First from "./components/First/First";
import Second from "./components/Second/Second";
import Third from "./components/Third/Third";

function App() {
  return (
    <div className="main-app">
      <First />
      <div className="second-and-third">
        <Second />
        <Third />
      </div>
    </div>
  );
}

export default App;
