import React from "react";
import styles from "../Styles/generalInfo.module.css";
export default function GeneralInfo(props) {
  return (
    <div className={`${styles.generalInfo} ${props.className} }`}>
      <div className={styles.left}>
        <div className={styles.name}>{props.info.name}</div>
        <div className={styles.nickname}>({props.info.nickname})</div>
      </div>
      <div className={styles.right}>
        <div>
          <a href={`tel:${props.info.phone}`} target="_blank">
            {props.info.phone}
          </a>
        </div>
        <div>
          <a className={styles.rightInfo} href={`mailto:${props.info.email}`}>
            {props.info.email}
          </a>
        </div>
        <div>
          <a
            href={`https://www.linkedin.com/in/${props.info.linkedin}`}
            target="_blank">
            LinkedIn
          </a>
        </div>
        <div>
          <a href={`https://github.com/${props.info.github}`} target="_blank">
            GitHub
          </a>
        </div>
        <div>
          <a href={`http://${props.info.kaggle}`} target="_blank">
            Kaggle
          </a>
        </div>
        <div className={styles.rightInfo}>{props.info.location}</div>
      </div>
    </div>
  );
}
