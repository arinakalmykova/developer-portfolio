import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { loadSkills } from "@/app";
import { SkillCard } from "./SkillCard";

export const SkillList = () => {
  const dispatch = useAppDispatch();

  const { skills, loading, error } = useAppSelector((state) => state.skill);

  useEffect(() => {
    dispatch(loadSkills());
  }, [dispatch]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;
  
  return (
    <div>
      {skills.map((skill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  );
};
