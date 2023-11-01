/** @format */

import React from "react";
import styles from "./SkillItems.module.css";

interface Skill {
  name: string;
}

interface SkillItemProps {
  skillName: string;
  item: Skill[];
}

const SkillItems: React.FC<SkillItemProps> = ({ skillName, item }) => {
  console.log(item);
  return (
    <div className={styles[skillName]}>
      {item.map((skill) => (
        <div className={styles.boxCover}>
          <img
            className={styles.imgStyle}
            src={`${process.env.PUBLIC_URL}/img/skill_image/${skill.name}.png`}
            alt="skill"
          />
        </div>
      ))}
    </div>
  );
};

export default SkillItems;
