import React from "react";
import styles from "../Styles/contentInfo.module.css";

export default function ContentInfo(props) {
  return (
    <div className={styles.content}>
      <div className={styles.topic}>{props.info[0].topic}</div>
      {props.info.map((item) => (
        <>
          <div className={styles.head}>{item.head}</div>
          <div className={styles.detail}>{item.details}</div>
        </>
      ))}
    </div>
  );
}
