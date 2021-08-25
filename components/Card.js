import React from "react";
import Image from "next/image";

import styles from "../styles/Card.module.scss";

const Card = () => {
  return (
    <>
      <div>
        <div className={styles.card}>
          <div
            className={styles.thumb}
            style={{
              backgroundImage:
                "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg)",
            }}
          ></div>
          <article>
            <h1>5 Inspirational Business Portraits and How to Make Your Own</h1>
            <div className={styles.author}>
              <span>Marie Gardiner</span>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Card;
