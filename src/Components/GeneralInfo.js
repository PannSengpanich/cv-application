import React from "react";
import styles from "../Styles/generalInfo.module.css";
export default function GeneralInfo(props) {
  return (
    <div className={styles.generalInfo}>
      <div className={styles.left}>
        <div className={styles.name}>{props.info.name}</div>
        <div className={styles.nickname}>{props.info.nickname}</div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightInfo}>Phone: {props.info.phone}</div>
        <div className={styles.rightInfo}>Email: {props.info.email}</div>
        <div className={styles.rightInfo}>Github: {props.info.github}</div>
        <div className={styles.rightInfo}>LinkedIn: {props.info.linkedin}</div>
        <div className={styles.rightInfo}>Location: {props.info.location}</div>
        <div className={styles.rightInfo}>Website: {props.info.website}</div>
      </div>
    </div>
  );
}
