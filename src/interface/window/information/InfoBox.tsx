/** @format */

import React from "react";

import DetailInfo from "./DetailInfo";
import { MdOutlineMedicalInformation } from "react-icons/md";
import styles from "./InfoBox.module.css";
const InfoBox = () => {
  const linksNames = ["자기소개서", "github"];

  return (
    <div>
      {" "}
      <h2>
        <span className={styles.margin}>
          {" "}
          <MdOutlineMedicalInformation />
        </span>
        MyInformation
      </h2>
      <div className={styles.infoFlex}>
        <div className={styles.pictureCover}>
          <div className={styles.picture}>
            <img
              src={`${process.env.PUBLIC_URL}/img/picture/picture.jpg`}
              alt=""
            />
          </div>
        </div>
        <div className={styles.infoBoxCover}>
          <div className={styles.infoBox}>
            <DetailInfo />
            <div className={styles.text}>
              <p>
                좌우명: "방향이 틀리지 않는다면 언젠간 목표에 도달한다."
                <br />
                마인드: 포기하지않는 열정, 배우면된다는 마음가짐, 실수도 배움의
                일부
              </p>
            </div>
          </div>
          <div className={styles.linkBox}>
            <a
              className={styles.link}
              href="https://github.com/thseogns/next13project"
            >
              Github 주소
            </a>
            <a
              className={styles.link}
              href={`${process.env.PUBLIC_URL}/personal/손대훈 입사지원서.pdf`}
            >
              입사 지원서
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
