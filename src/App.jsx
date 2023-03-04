import "./App.css";
import Navbar from "./component/navbar.jsx";
import Menu from "./component/menu.jsx";
import { Routes, Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-row items-start gap-[3rem]">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogtext/:blogsId" element={<Blogtext />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
