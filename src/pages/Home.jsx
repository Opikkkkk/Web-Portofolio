import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ name }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes((prev) => prev + 1);
      setLiked(true);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-16 min-h-screen">
      {/* Gambar */}
      <div className="w-full md:w-1/2 mb-12 md:mb-0 flex justify-center">
        <img
          src="profile.jpg"
          alt="Foto Profil"
          className="rounded-full w-72 h-72 sm:w-80 sm:h-80 object-cover border-4 border-blue-600 transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Teks */}
      <div className="w-full md:w-1/2 text-center md:text-left px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-sans">
          Halo, saya{" "}
          <span className="text-blue-600">{name}</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-serif">
          Perkenalkan nama saya {name}, seorang mahasiswa
          Institut Teknologi Nasional Bandung yang sedang menempuh pendidikan di
          jurusan Informatika. Saya memiliki ketertarikan yang besar dalam dunia
          teknologi dan pengembangan perangkat lunak.
        </p>

        {/* Tombol Navigasi */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
          <Link
            to="/about"
            className="bg-blue-600 text-white text-lg px-6 py-3 rounded hover:bg-blue-700 transition text-center"
          >
            Tentang Saya
          </Link>
          <Link
            to="/projects"
            className="border border-blue-600 text-blue-600 text-lg px-6 py-3 rounded hover:bg-blue-50 transition text-center"
          >
            Lihat Proyek
          </Link>
        </div>

        {/* Like Counter */}
        <div className="text-center md:text-left">
          <button
            onClick={handleLike}
            className={`${
              liked
                ? "bg-blue-600 text-white"
                : "border border-blue-600 text-blue-600"
            } px-6 py-2 rounded-lg text-base transition hover:scale-105`}
          >
            {liked ? "Liked 💙" : "Like 👍"}
          </button>
          {likes > 0 && (
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
              Disukai {likes} orang
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
