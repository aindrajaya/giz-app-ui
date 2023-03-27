import React, { useState } from 'react';
import axios from 'axios';
import FormBox from './FormBox';
import styles from "../styles/Main.module.css";
import Image from 'next/image';
import building from '../../public/assets/building.png'
import ImageBox from './ImageBox';
import FormResultBox from './FormResultBox';
import ImageResultBox from './ImageResultBox';

function MainForm() {

      return (
        <div className={styles.main}>
          <div className={styles.ImageForm}>
            <ImageBox />
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