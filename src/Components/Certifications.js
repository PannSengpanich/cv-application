import React from "react";
import styles from "../Styles/certifications.module.css";
import jsCertImage from "../images/fcc-js.jpg";
import responsiveDesignCertImage from "../images/fcc-ResponsiveDesign.jpg";

export default function Certifications(props) {
  return (
    <div className={`${styles.content} ${props.className}`}>
      <div className={styles.topic}>CERTIFICATIONS</div>
      <div className={styles.container}>
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
