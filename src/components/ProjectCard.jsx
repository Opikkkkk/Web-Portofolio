import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="border rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-800">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{project.date}</p>
        <p className="my-2 text-gray-700 dark:text-gray-200">{project.description}</p>
        <div className="flex flex-wrap gap-2 text-sm mb-2">
          {project.technologies.map((tech, i) => (
            <span key={i} className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline text-sm"
          >
            Lihat di GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
