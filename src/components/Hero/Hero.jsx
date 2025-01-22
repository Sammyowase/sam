import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Samuel </h1>
        <p className={styles.description}>
          A talented and driven software Developer specializing in FrontEnd development, BackEnd development and database management.
        </p>
        <div className={styles.buttonGroup}>
          
          <a href="mailto:samuelowase02@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>

          <a href="./cv.pdf" className={`${styles.contactBtn}`}>
          Download Cv
          </a>
        </div>
       
      </div>
      <img
        src={getImageUrl("hero/IMG_20240119_144414_with_border_radius.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
