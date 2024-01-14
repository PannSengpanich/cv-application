import React from "react";
import styles from "../Styles/certifications.module.css";
import jsCertImage from "../images/fcc-js.jpg";
import responsiveDesignCertImage from "../images/fcc-ResponsiveDesign.jpg";
import dataSciCertImage from "../images/dataSciCert.jpg";
import PostgreSQLCertImage from "../images/PostgreSQLCert.jpg";
import dataSciRealWorldCert from "../images/dataSciRealWorld.jpg";

export default function Certifications(props) {
  return (
    <div className={`${styles.content} ${props.className}`}>
      <div className={styles.topic}>CERTIFICATIONS</div>
      <div className={styles.container}>
        <div className={styles.object}>
          <a href="https://www.udemy.com/certificate/UC-fb1dfcac-a15e-4197-b99e-7327e8af1428/">
            <img
              src={PostgreSQLCertImage}
              alt="Master SQL For Data Science Certification"
            />
          </a>
        </div>
        <div className={styles.object}>
          <a href="https://www.udemy.com/certificate/UC-6f4ff25d-7789-46f7-9853-9298645be36c/">
            <img
              src={dataSciRealWorldCert}
              alt=" Data Science Real World Projects in Python"
            />
          </a>
        </div>
        <div className={styles.object}>
          <a href="https://www.udemy.com/certificate/UC-ff659d9b-0638-4480-9e14-27bfaa605c3f/">
            <img
              src={dataSciCertImage}
              alt="Python for Data Science and Machine Learning Bootcamp Certification"
            />
          </a>
        </div>
        <div className={styles.object}>
          <a href="https://www.freecodecamp.org/certification/PannSengpanich/javascript-algorithms-and-data-structures">
            <img src={jsCertImage} alt="JavaScript Certification" />
          </a>
        </div>
        <div className={styles.object}>
          <a href="https://www.freecodecamp.org/certification/PannSengpanich/responsive-web-design">
            <img
              src={responsiveDesignCertImage}
              alt="Responsive Design Certification"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
