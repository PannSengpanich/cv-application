import React from "react";
import styles from "../Styles/generalInfo.module.css";
export default function GeneralInfo(props) {
  return (
    <div className={styles.generalInfo}>
      <div className={styles.left}>
        <div className={styles.name}>{props.info.name}</div>
        <div className={styles.nickname}>({props.info.nickname})</div>
      </div>
      <div className={styles.right}>
        <div>
          <a href={`tel:${props.info.phone}`}>{props.info.phone}</a>
        </div>
        <div>
          <a className={styles.rightInfo} href={`mailto:${props.info.email}`}>
            {props.info.email}
          </a>
        </div>
        <div>
          <a href={`https://github.com/${props.info.github}`}>GitHub</a>
        </div>
        <div>
          <a href={`https://www.linkedin.com/in/${props.info.linkedin}`}>
            LinkedIn
          </a>
        </div>
        <div className={styles.rightInfo}>Location: {props.info.location}</div>
        <div>
          <a href={`https://www.youtube.com/watch?v=video-id`}>Youtube</a>
        </div>
      </div>
    </div>
  );
}
