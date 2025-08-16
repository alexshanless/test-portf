import { Link } from 'react-router';
import type { Project } from '~/types';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      className="block transform transition duration-300 hover:scale-[1.02]"
      to={`/projects/${project.id}`}
    >
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>{new Date(project.date).toLocaleDateString()}</span>
            <span className="capitalize">{project.category}</span>
          </div>
          <a
            href={project.url}
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Project
          </a>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
