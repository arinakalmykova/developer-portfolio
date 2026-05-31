import type { Skill } from "@/entities";

interface Props {
  skill: Skill;
}

export const SkillCard = ({ skill }: Props) => {
  return (
    <div>
      <h4>{skill.name}</h4>
      <span>{skill.category}</span>
    </div>
  );
};
