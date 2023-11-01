/** @format */

import React from "react";
import styles from "./Background.module.css";
// import StartBar from "./windowInterface/startbar/Startbar";
// import FileCover from "./windowInterface/windowFile/FileCover";
// import Window from "./windowInterface/window/Window";
import File from "../file/File";
import type { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Information from "../window/information/Information";
import Window from "../window/Window";
import Skill from "../window/skill/Skill";
import Startbar from "../startbar/Startbar";
import WeatherAppPage from "../window/WeatherAppPage";

const Background = () => {
  const hoverElementName = useSelector((state: RootState) => state.list.hover);
  let value = useSelector((state: RootState) => state.window.windowPageDisplay);
  const number = useSelector(
    (state: RootState) => state.window.backgroundNumber
  );

  console.log("보낸 후 의값", number);
  return (
    <div className={styles.main_back}>
      <BrowserRouter>
        {number === 0 && (
          <img
            src={`${process.env.PUBLIC_URL}/img/background_image/win.jpg`}
            alt="Background"
          />
        )}
        {number === 1 && (
          <img
            src={`${process.env.PUBLIC_URL}/img/background_image/win2.jpg`}
            alt="Background"
          />
        )}
        {number === 2 && (
          <img
            src={`${process.env.PUBLIC_URL}/img/background_image/win3.jpg`}
            alt="Background"
          />
        )}{" "}
        <File />
        <Routes>
          <Route path="/*" element={null} />{" "}
          {/*주소가 /일때 디스플레이 값을 0으로? 해서 window를 없애자. */}
          <Route path="/window/*" element={<Window />}></Route>
          <Route path="/weather" element={<WeatherAppPage />}></Route>
          {/* <Route path="/Info/*" element={<Info />} />
          <Route path="/Skill/*" element={<Skill />} />
          <Route path="/Project/*" element={<Project />} /> */}
        </Routes>
      </BrowserRouter>

      {/* <FileCover />
      {value && <Window />}
      <StartBar /> */}
      <Startbar />
    </div>
  );
};

export default Background;
