import React, { useState } from "react";
import Form from "./Form";
import styles from "../Styles/contentInfo.module.css";

export default function ContentInfo(props) {
  const [isForm, setIsForm] = useState(false);
  function FormHandler() {
    setIsForm(true);
  }
  return (
    <>
      <div className={styles.content}>
        <div className={styles.topic}>
          {props.info[0].topic}{" "}
          <button id={props.info[0].topic} onClick={FormHandler}>
            Edit
          </button>
        </div>
        {props.info.map((item, index) => (
          <>
            {index !== 0 && (
              <>
                <div className={styles.head}>
                  {item.head}
                  {item.date && <span>{item.date}</span>}
                </div>
                <div className={styles.detail}>{item.details}</div>
                {item.url && (
                  <a href={item.url} className={styles.url}>
                    Click Here
                  </a>
                )}
              </>
            )}
          </>
        ))}
      </div>
      {isForm === true && <Form formInfo={props.info}></Form>}
    </>
  );
}
