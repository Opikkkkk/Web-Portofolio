import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaCode,
  FaLaravel,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiApachenetbeanside } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "Python", icon: <FaPython className="text-blue-500" /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-500" /> },
];

const tools = [
  { name: "VS Code", icon: <FaCode className="text-indigo-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-orange-500" /> },
  { name: "NetBeans", icon: <SiApachenetbeanside className="text-orange-500" /> },
];

const text = {
  en: {
    title: "About Me",
    description:
      "Hi! I'm a student at Institut Teknologi Nasional Bandung, majoring in Informatics. I have a strong passion for web development, especially in building modern and responsive websites using HTML, CSS, JavaScript, and frameworks like Tailwind CSS and Laravel. I'm constantly learning and enjoy solving real-world problems through technology.",
    skillsTitle: "Skills",
    toolsTitle: "Tools & Frameworks",
  },
  id: {
    title: "Tentang Saya",
    description:
      "Halo! Saya adalah mahasiswa di Institut Teknologi Nasional Bandung dengan jurusan Informatika. Saya memiliki ketertarikan besar dalam pengembangan web, terutama dalam membangun website yang modern dan responsif menggunakan HTML, CSS, JavaScript, serta framework seperti Tailwind CSS dan Laravel. Saya senang belajar hal baru dan menyelesaikan permasalahan dunia nyata melalui teknologi.",
    skillsTitle: "Keahlian",
    toolsTitle: "Peralatan & Framework",
  },
};


const About = ({ language = "id" }) => {
  const t = text[language];

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">{t.title}</h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
        {t.description}
      </p>

      {/* SKILLS */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">{t.skillsTitle}</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full shadow-sm"
            >
              <span className="text-xl">{skill.icon}</span>
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* TOOLS */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">{t.toolsTitle}</h2>
        <div className="flex flex-wrap gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full shadow-sm"
            >
              <span className="text-xl">{tool.icon}</span>
              <span className="text-sm font-medium">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
