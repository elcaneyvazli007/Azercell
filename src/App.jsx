import "./App.css";
import Navbar from "./component/navbar.jsx";
import Menu from "./component/menu.jsx";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Ayarlar from "./pages/ayarlar.jsx";
import Esas from "./pages/esas.jsx";
import Internet from "./pages/internet.jsx";
import Maliyye from "./pages/maliyye.jsx";
import Paylas from "./pages/paylas.jsx";
import Tarifler from "./pages/tarifler.jsx";
import Tetbiqler from "./pages/tetbiqler.jsx";
import Xidmetler from "./pages/xidmetler.jsx";
import Nealiyyetler from "./pages/nealiyyetler.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-row items-start justify-around gap-[3rem] w-[60%] mx-auto pt-[3rem]">
        <Menu />
          <Routes>
            <Route path="/" element={<Esas />} />
            <Route path="/ayarlar" element={<Ayarlar />} />
            <Route path="/internet" element={<Internet />} />
            <Route path="/internet" element={<Maliyye />} />
            <Route path="/paylas" element={<Paylas />} />
            <Route path="/tarifler" element={<Tarifler />} />
            <Route path="/tetbiqler" element={<Tetbiqler />} />
            <Route path="/xidmetler" element={<Xidmetler />} />
            <Route path="/nealiyyetler" element={<Nealiyyetler />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
