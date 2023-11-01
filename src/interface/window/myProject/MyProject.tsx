import React from "react";
import ProjectItems from "./ProjectItems";
import styles from "./MyProject.module.css";
const MyProject = () => {
  return (
    <div className={styles.cover}>
      <ProjectItems />
    </div>
  );
};

export default MyProject;
