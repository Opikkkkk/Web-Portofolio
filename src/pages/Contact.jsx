import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const text = {
  en: {
    title: "Contact Me",
    email: "muhammadtaufiqrahmanhakim@email.com",
    phone: "+62 896-0434-0102",
    linkedin: "linkedin.com/in/Taufiq",
    github: "github.com/Opikkkkk",
    instagram: "instagram.com/taufiqrhm__",
  },
  id: {
    title: "Hubungi Saya",
    email: "muhammadtaufiqrahmanhakim@email.com",
    phone: "+62 896-0434-0102",
    linkedin: "linkedin.com/in/Taufiq",
    github: "github.com/Opikkkkk",
    instagram: "instagram.com/taufiqrhm__",
  },
};

const Contact = ({ language = "id" }) => {
  const t = text[language];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">{t.title}</h1>

      <div className="space-y-5 text-lg max-w-xl mx-auto">
        {/* Email */}
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-blue-600 text-xl" />
          <a
            href={`mailto:${t.email}`}
            className="hover:underline text-gray-800 dark:text-gray-200"
          >
            {t.email}
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4">
          <FaPhone className="text-green-600 text-xl" />
          <span className="text-gray-800 dark:text-gray-200">{t.phone}</span>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-4">
          <FaLinkedin className="text-blue-700 text-xl" />
          <a
            href="https://www.linkedin.com/in/muhammad-taufiq-rahman-hakim-442a2b314/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline text-gray-800 dark:text-gray-200"
          >
            {t.linkedin}
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-4">
          <FaGithub className="text-gray-800 text-xl dark:text-white" />
          <a
            href="https://github.com/Opikkkkk"
            target="_blank"
            rel="noreferrer"
            className="hover:underline text-gray-800 dark:text-gray-200"
          >
            {t.github}
          </a>
        </div>

        {/* Instagram */}
        <div className="flex items-center gap-4">
          <FaInstagram className="text-pink-500 text-xl" />
          <a
            href="https://instagram.com/taufiqrhm__"
            target="_blank"
            rel="noreferrer"
            className="hover:underline text-gray-800 dark:text-gray-200"
          >
            {t.instagram}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
