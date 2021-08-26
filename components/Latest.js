import React from "react";
import { Carousel } from "react-bootstrap";

import styles from "../styles/Latest.module.css";

import "react-multi-carousel/lib/styles.css";

const Latest = () => {
  return (
    <>
      <div className={styles.latest}>
        <div className={styles.latest_sub}>
          <Carousel className={styles.carousel} indicators={false}>
            <Carousel.Item className={styles.item}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1533422902779-aff35862e462?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt="First slide"
              />
              <Carousel.Caption className={styles.caption}>
                <h3>২৫ বছরের লোন কিভাবে ১০ বছরে শোধ করা যাই</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.item}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1533422902779-aff35862e462?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt="Second slide"
              />

              <Carousel.Caption className={styles.caption}>
                <h3>ভাড়ায় থাকা উচিত ? BUY HOME VS RENT</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.item}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1533422902779-aff35862e462?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt="Third slide"
              />

              <Carousel.Caption className={styles.caption}>
                <h3>ZOMATO তে কি ইনভেস্ট করা উচিত কি না ?</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Latest;
