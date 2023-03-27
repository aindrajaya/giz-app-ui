import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from "../styles/Main.module.css";

const FormBox = () => {
  const handleCalculation = () => {
    console.log('calculation');
  }

  return (
    <form className={styles.formBoxContainer}>
      <div className={styles.horizontalShape}></div>
      <label>
        Input width and length per module (m)
        <br />
        <input className={styles.label} type="number" name="modulewidth" placeholder='width' /> : <input className={styles.label} type="number" name="modulelength" placeholder='length' />
      </label>

      <br />

      <label>
        Capacity per module (Wp)
        <br />
        <input className={styles.label} type="number" name="capacity" placeholder='watt peak' />
      </label>

      <br />

      <label>
        Efficiency per module (%)
        <br />
        <input className={styles.label} type="number" name="efficiency" placeholder='percentage' />
      </label>

      <br />

      <label>
        Location specific solar irradiance (kWh/m2)
        <br />
        <input className={styles.label} type="number" name="location" placeholder='kilowatt hours per square meter' />
      </label>

      <br />

      <label>
        Array + system losses (%)
        <br />
        <input className={styles.label} type="number" name="arraysystemlosses" placeholder='percentage' />
      </label>

      <br />

      <button className={styles.buttonUpload} onClick={handleCalculation} type="submit">Submit</button>
    </form>
  );
};

export default FormBox;
