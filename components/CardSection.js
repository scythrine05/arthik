import React from "react";
import Image from "next/image";
import Card from "./Card";

import styles from "../styles/Card.module.scss";

const CardSection = (props) => {
  return (
    <>
      <div className={styles.band}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default CardSection;
