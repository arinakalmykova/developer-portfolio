import type { Project } from "@/entities";
import axios from "axios";

export const fetchProjects = async (): Promise<Project[]> => {
  const res = await axios("/api/projects");

  if (res.status !== 200) {
    throw new Error("Failed to fetch projects");
  }

  return res.data;
};