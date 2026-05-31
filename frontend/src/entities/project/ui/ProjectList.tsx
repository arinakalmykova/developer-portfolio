import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { loadProjects } from "@/app";
import { ProjectCard } from "@/entities/project";

export const ProjectList = () => {
  const dispatch = useAppDispatch();

  const { projects, loading, error } = useAppSelector(
    (state) => state.project
  );

  useEffect(() => {
    dispatch(loadProjects());
  }, [dispatch]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};