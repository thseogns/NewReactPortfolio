/** @format */

import React from "react";
import styles from "./File.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { pageName } from "../../features/windowSlice";

const File = () => {
  const dispatch = useDispatch();
  const fileName = [
    { name: "바탕화면", img: "mypc", path: "/" },
    { name: "내정보", img: "net", path: "/window/information" },
    { name: "내기술", img: "pngegg", path: "/window/skill" },
    { name: "메모장", img: "memo", path: "/window/memo" },
    { name: "프로젝트", img: "folder", path: "/window/my_project" },
    { name: "숫자기록", img: "counter", path: "/window/counter" },
    { name: "날씨", img: "weather", path: "/weather" },
    {
      name: "next13\n_page",
      img: "trash",
      path: "https://voluble-croquembouche-c0ff61.netlify.app/",
      target: "_blank",
    },
  ];

  const clickHandler: React.MouseEventHandler<HTMLLIElement> = (e) => {
    const patchName = e.currentTarget.getAttribute("data-name");
    if (patchName !== null && patchName !== "휴지통") {
      dispatch(pageName(patchName));
    }
  };
  return (
    <ul className={styles.position}>
      {fileName.map((name) => (
        <li
          key={name.name}
          className={styles.folder}
          data-name={name.name}
          onClick={clickHandler}
        >
          <div>
            <Link to={`${name.path}`} target={name.target && name.target}>
              <img
                src={`${process.env.PUBLIC_URL}/img/folder_image/${name.img}.png`}
                alt="이미지"
              ></img>
              <div>{name.name}</div>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default File;
