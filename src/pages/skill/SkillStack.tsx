/** @format */

import React from "react";

import SkillItems from "./SkillItems";
import styles from "./SkillStack.module.css";

const MyStack = () => {
  const skillName = ["main", "sub", "other"];
  const mainSkills = [
    { name: "html" },
    { name: "css" },
    { name: "js" },
    { name: "react" },
    { name: "tailwind" },
    { name: "nextjs" },
    { name: "typescript" },
    { name: "firebase" },
    { name: "svelte" },
  ];
  const subSkills = [
    { name: "JQ" },
    { name: "sass" },
    { name: "boot" },
    { name: "java" },
  ];
  const otherSkills = [
    { name: "illust" },
    { name: "Photoshop" },
    { name: "excel" },
    { name: "indesign" },
  ];

  return (
    <div>
      <h1>My Stack</h1>
      <div className={styles.stack_flex}>
        <SkillItems skillName={skillName[0]} item={mainSkills} />
        <SkillItems skillName={skillName[1]} item={subSkills} />
        <SkillItems skillName={skillName[2]} item={otherSkills} />
      </div>
    </div>
  );
};

export default MyStack;
