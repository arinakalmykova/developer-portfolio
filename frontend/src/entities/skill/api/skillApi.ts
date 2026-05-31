import axios from "axios";
import type { Skill } from "@/entities";

export const fetchSkills = async (): Promise<Skill[]> => {
  const { data } = await axios.get("/api/skills");
  return data;
};