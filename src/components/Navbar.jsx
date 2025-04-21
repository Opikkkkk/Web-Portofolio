import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en"); // 'en' or 'id'

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleLanguage = () => setLanguage(language === "en" ? "id" : "en");

  const navText = {
    en: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      portfolio: "PORTFOLIO",
    },
    id: {
      home: "Beranda",
      about: "Tentang",
      projects: "Proyek",
      contact: "Kontak",
      portfolio: "PORTOFOLIO",
    },
  };

  const t = navText[language];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-white font-serif">
          {t.portfolio}
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center text-lg font-medium text-gray-800 dark:text-white">
          <li>
            <Link to="/" className="hover:text-blue-500 transition">{t.home}</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500 transition">{t.about}</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-500 transition">{t.projects}</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500 transition">{t.contact}</Link>
          </li>
          <li>
            <button
              onClick={toggleLanguage}
              className="ml-4 px-3 py-1 text-sm border border-gray-400 dark:border-white rounded hover:bg-blue-100 dark:hover:bg-gray-700 transition"
            >
              {language === "en" ? "ID" : "EN"}
            </button>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-2xl text-gray-800 dark:text-white">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-4 text-gray-800 dark:text-white text-base font-medium">
          <Link to="/" onClick={toggleMenu} className="block hover:text-blue-500 transition">
            {t.home}
          </Link>
          <Link to="/about" onClick={toggleMenu} className="block hover:text-blue-500 transition">
            {t.about}
          </Link>
          <Link to="/projects" onClick={toggleMenu} className="block hover:text-blue-500 transition">
            {t.projects}
          </Link>
          <Link to="/contact" onClick={toggleMenu} className="block hover:text-blue-500 transition">
            {t.contact}
          </Link>
          <button
            onClick={() => {
              toggleLanguage();
              setMenuOpen(false);
            }}
            className="block hover:text-blue-500 transition"
          >
            {language === "en" ? "Ganti ke ID" : "Switch to EN"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
