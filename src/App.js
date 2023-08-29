import React, { useState } from "react";

import Certifications from "./Components/Certifications";
import GeneralInfo from "./Components/GeneralInfo";
import ContentInfo from "./Components/ContentInfo";
import { data } from "./data";

import styles from "./Styles/app.module.css";

function App() {
  const [currentData, setData] = useState(data);
  const updateData = (dataKey, newData) => {
    setData((prevData) => ({
      ...prevData,
      [dataKey]: [...prevData[dataKey], newData],
    }));
  };

  return (
    <div className={styles.mainContainer}>
      <GeneralInfo
        info={currentData.InfoData}
        className={styles.generalInfo}
      ></GeneralInfo>
      <ContentInfo
        info={currentData.TechData}
        className={styles.techInfo}
        updateInfo={(newData) => updateData("TechData", newData)}
      ></ContentInfo>

      <ContentInfo
        info={currentData.WorkData}
        className={styles.workInfo}
        updateInfo={(newData) => updateData("WorkData", newData)}
      ></ContentInfo>
      <ContentInfo
        info={currentData.EdData}
        className={styles.edInfo}
        updateInfo={(newData) => updateData("EdData", newData)}
      ></ContentInfo>

      <ContentInfo
        info={currentData.ProjActData}
        className={styles.projActInfo}
        updateInfo={(newData) => updateData("ProjActData", newData)}
      ></ContentInfo>
      <ContentInfo
        info={currentData.MisData}
        className={styles.misInfo}
        updateInfo={(newData) => updateData("MisData", newData)}
      ></ContentInfo>
      <ContentInfo
        info={currentData.IntLangData}
        className={styles.intLangInfo}
        updateInfo={(newData) => updateData("IntLangData", newData)}
      ></ContentInfo>
      <Certifications
        info={currentData.CerData}
        className={styles.cerInfo}
      ></Certifications>
    </div>
  );
}

export default App;
