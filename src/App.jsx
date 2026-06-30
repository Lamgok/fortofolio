import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import "./App.css";

function App() {
  const handleMouseMove = (event) => {
    const appShell = event.currentTarget;
    const x = (event.clientX / window.innerWidth) * 100;
    const y = (event.clientY / window.innerHeight) * 100;

    appShell.style.setProperty("--bg-x", `${x}%`);
    appShell.style.setProperty("--bg-y", `${y}%`);
  };

  return (
    <div
      className="app-shell"
      onMouseMove={handleMouseMove}
      onMouseLeave={(event) => {
        event.currentTarget.style.setProperty("--bg-x", "50%");
        event.currentTarget.style.setProperty("--bg-y", "50%");
      }}
    >
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
