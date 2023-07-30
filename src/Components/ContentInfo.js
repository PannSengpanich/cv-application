import React, { useState } from "react";
import Form from "./Form";
import styles from "../Styles/contentInfo.module.css";

export default function ContentInfo(props) {
  const [isForm, setIsForm] = useState(false);
  function FormEditHandler() {
    setIsForm(!isForm);
  }
  function formSubmitHandler(newInfo) {
    setIsForm(false);
    props.updateInfo(newInfo);
  }
  console.log(props.info.details);
  return (
    <div className={props.className}>
      <div className={styles.content}>
        <div className={styles.topic}>{props.info[0].topic} </div>
        {props.info.map((item, index) => (
          <>
            {index !== 0 && (
              <>
                <div className={styles.head}>
                  <div className={styles.headLeft}>{item.head}</div>
                  <div className={styles.headRight}>
                    {item.date && <div>{item.date}</div>}
                  </div>
                </div>
                {item.organization ? (
                  <>
                    <div className={styles.org}>{item.organization}</div>
                  </>
                ) : (
                  <></>
                )}
                {Array.isArray(item.details) ? (
                  <ul>
                    {item.details.map((detail) => {
                      return <li className={styles.detail}>{detail}</li>;
                    })}
                  </ul>
                ) : (
                  <div className={styles.detail}>{item.details}</div>
                )}

                {item.url && (
                  <a href={item.url} className={styles.url} target="_blank">
                    Click Here
                  </a>
                )}
              </>
            )}
          </>
        ))}
      </div>
      {isForm === true && (
        <Form formInfo={props.info} formSubmit={formSubmitHandler}></Form>
      )}
    </div>
  );
}
