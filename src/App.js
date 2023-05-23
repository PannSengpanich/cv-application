import React from "react";

import Certifications from "./Components/Certifications";
import GeneralInfo from "./Components/GeneralInfo";
import ContentInfo from "./Components/ContentInfo";
import {
  InfoData,
  TechData,
  EdData,
  ProjActData,
  MisData,
  CerData,
  IntLangData,
} from "./data";

import styles from "./Styles/app.module.css";

function App() {
  return (
    <div className={styles.mainContainer}>
      <GeneralInfo info={InfoData}></GeneralInfo>
      <ContentInfo info={TechData}></ContentInfo>
      <ContentInfo info={EdData}></ContentInfo>
      <ContentInfo info={ProjActData}></ContentInfo>
      <ContentInfo info={MisData}></ContentInfo>

      <ContentInfo info={IntLangData}></ContentInfo>
      <Certifications info={CerData}></Certifications>
    </div>
  );
}

export default App;
