/** @format */

import React from "react";
import Information from "../pages/infomation/Information";
import Skill from "../pages/skill/Skill";
import { Route, Routes } from "react-router-dom";
import MyProject from "../pages/myProject/MyProject";
import Memo from "../pages/memo/Memo";
import NumberCounter from "../pages/numberCounter/NumberCounter";
const PageRouter = () => {
  return (
    <Routes>
      <Route path="/information" element={<Information />}></Route>
      <Route path="/skill" element={<Skill />}></Route>
      <Route path="/my_project" element={<MyProject />}></Route>
      <Route path="/memo" element={<Memo />}></Route>
      <Route path="/trashnext" element={<Skill />}></Route>
      <Route path="/counter" element={<NumberCounter />}></Route>
    </Routes>
  );
};

export default PageRouter;
