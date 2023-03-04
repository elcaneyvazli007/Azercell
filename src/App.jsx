import "./App.css";
import Navbar from "./component/navbar.jsx";
import Menu from "./component/menu.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-row items-start gap-[3rem]">
        <Menu />
      </div>
      
    </div>
  );
}

export default App;
