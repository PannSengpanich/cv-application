import React from "react";
import styles from "../Styles/generalInfo.module.css";

export default function GeneralInfo(props) {
  return (
    <div className={`${styles.generalInfo} ${props.className}`}>
      <div className={styles.center}>
        <div className={styles.name}>{props.info.name}</div>

        <a className={styles.rightInfo} href={`mailto:${props.info.email}`}>
          {props.info.email}
        </a>
        <div href={`tel:${props.info.phone}`}>{props.info.phone}</div>
      </div>
    </div>
  );
}
