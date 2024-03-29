/** @format */

import React from "react";
import styles from "./Skill.module.css";

import SkillCover from "./SkillCover";
import { Counter } from "./function/countClickUp/Counter";
import CountUp from "./function/countHoverUp/CountUp";
import DragAndDrop from "./function/drag/DragAndDrop";
import ResizeDiagonal from "./function/resize/ResizeDiagonal";
import Resize from "./function/resize/Resize";
import Login from "./function/login/Login";
import DropDown from "./function/dropDown/DropDown";

import SkillStack from "./SkillStack";

const Skill = () => {
  const skillNames = [
    "Counter",
    "Resize",
    "ResizeDiagonal",
    "DragAndDrop",
    "DropDown",
    "Scroll",
    "Login",
    "CountUp",
  ];
  return (
    <div className={styles.cover}>
      <SkillStack />
      <div>
        <h1 className={styles.text_bottom}> Skills</h1>
        <div className={styles.skill_flex}>
          {" "}
          <SkillCover>
            <div>{skillNames[0]}</div>
            <Counter />
          </SkillCover>
          <SkillCover>
            <div>{skillNames[1]}</div>
            <Resize />
          </SkillCover>
          <SkillCover>
            <div>{skillNames[2]}</div>
            <ResizeDiagonal />
          </SkillCover>
          <SkillCover>
            <div>{skillNames[3]}</div>
            <DragAndDrop />
          </SkillCover>
          <SkillCover>
            <div>{skillNames[4]}</div>
            <DropDown />
          </SkillCover>
          <SkillCover>
            <div>{skillNames[6]}</div>
            <Login />
          </SkillCover>
          <SkillCover>
            <div>{skillNames[7]}</div>
            <CountUp />
          </SkillCover>
        </div>
      </div>
    </div>
  );
};

export default Skill;
