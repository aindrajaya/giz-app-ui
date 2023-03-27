import React, { useState, useEffect } from 'react';
import styles from "../styles/Main.module.css";
import axios from 'axios';

function FormResultBox() {
  
  return (
    <div className={styles.resultBoxContainer}>
      <div className={styles.typographyContainer}>
        <h2>Potential Result</h2>
        <p>Scale : 0.1</p>
        <p>Width & Length : 0.1 & 0.1</p>
        <p>Capacity : 0.1</p>
        <p>Efficiency : 0.1</p>
        <p>Location specific : 0.1</p>
        <p>Array+system losses : 0.1</p>
      </div>
      <div>
        <div className={styles.resultCardContainer}>
          <div className={styles.resultCard}>
            <p>Maximum PV System Capacity</p>
            <h2>100kWp</h2>
          </div>
          <div className={styles.resultCard}>
            <p>Estimated Yearly Energy</p>
            <h2>1200kWh</h2>
          </div>
          <div className={styles.resultCard}>
            <p>Total Area</p>
            <h2>700m2</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormResultBox;
