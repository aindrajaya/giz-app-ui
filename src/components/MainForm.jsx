import React, { useState } from 'react';
import FormBox from './FormBox';
import styles from "../styles/Main.module.css";
import FormResultBox from './FormResultBox';
import ImageResultBox from './ImageResultBox';

function MainForm() {
      return (
        <div className={styles.main}>
          <div className={styles.ImageForm}>
            <FormBox />
          </div>
          <div className={styles.resultContainer}>
            <div className={styles.imageBox}>
              <ImageResultBox />
            </div>
            <div className={styles.resultBox}>
              <FormResultBox />
            </div>
          </div>
        </div>
  )
}

export default MainForm