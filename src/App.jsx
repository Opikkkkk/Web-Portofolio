import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { useState } from "react";



function App() {
  const [language, setLanguage] = useState("id");

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <Navbar language={language} setLanguage={setLanguage} />
      
      <div className="flex-grow">
        <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/about" element={<About language={language} />} />
          <Route path="/projects" element={<Projects language={language} />} />
          <Route path="/contact" element={<Contact language={language} />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  );
}


export default App;
