import type { Project } from "../model/types";

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <div>
      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div>
        {project.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <a href={project.github} target="_blank">
        GitHub
      </a>
    </div>
  );
};