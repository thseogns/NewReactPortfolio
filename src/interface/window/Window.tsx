/** @format */

import React from "react";
import styles from "./Window.module.css";
import WindowHeader from "./WindowHeader";
import WindowPage from "./WindowPage";
import Information from "./information/Information";
import Skill from "./skill/Skill";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyProject from "./myProject/MyProject";
import Memo from "./memo/Memo";
import NumverCounter from "./numberCounter/NumverCounter";

const Window = () => {
  return (
    <div className={styles.window}>
      <WindowHeader />
      <WindowPage>
        <Routes>
          <Route path="/information" element={<Information />}></Route>
          <Route path="/skill" element={<Skill />}></Route>
          <Route path="/my_project" element={<MyProject />}></Route>
          <Route path="/memo" element={<Memo />}></Route>
          <Route path="/trashnext" element={<Skill />}></Route>
          <Route path="/counter" element={<NumverCounter />}></Route>
        </Routes>
      </WindowPage>
    </div>
  );
};

export default Window;
