import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Navigation dihapus
import "swiper/css";
import "swiper/css/pagination";

// Data proyek
const projects = [
  {
    name: "Web Sekolah",
    date: "24 November 2024",
    desc: "Aplikasi manajemen jadwal sekolah sederhana.",
    tech: "Laravel, PHP, Tailwind",
    image: "web 1.png",
    link: "https://github.com/Opikkkkk/uts-pemweb",
  },
  {
    name: "Website Informatika",
    date: "28 November 2024",
    desc: "Website profile Informatika.",
    tech: "Laravel, PHP, Tailwind",
    image: "web 2.png",
    link: "https://github.com/riccikoo/informatics-web",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Project</h2>

      <Swiper
        modules={[Pagination, Autoplay]} // Navigation dihapus dari sini juga
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-1">{project.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{project.date}</p>
              <p className="text-base mb-2">{project.desc}</p>
              <p className="text-sm font-medium text-blue-600 mb-2">{project.tech}</p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-blue-500 hover:underline"
                >
                  Lihat Project
                </a>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
