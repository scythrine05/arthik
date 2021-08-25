import React from "react";
import { Carousel } from "react-bootstrap";

import styles from "../styles/Latest.module.css";

import "react-multi-carousel/lib/styles.css";

const Latest = () => {
  return (
    <>
      <div className={styles.latest}>
        <div className={styles.latest_sub}>
          <Carousel indicators={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1533422902779-aff35862e462?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt="First slide"
              />
              <Carousel.Caption className={styles.caption}>
                <h3>
                  First slide label First slide label0First slide labelFirst
                  slide label First slide label First slide label First slide
                  label First slide label First slide label First slide label
                  First slide label First slide label First slide label First
                  slide label First slide label
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1533422902779-aff35862e462?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt="Second slide"
              />

              <Carousel.Caption className={styles.caption}>
                <h3>Second slide label</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1533422902779-aff35862e462?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt="Third slide"
              />

              <Carousel.Caption className={styles.caption}>
                <h3>Third slide label</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Latest;
