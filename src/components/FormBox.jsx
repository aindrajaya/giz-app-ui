import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from "../styles/Main.module.css";
import ImageResultBox from './ImageResultBox';

const FormBox = () => {
  const [loading, setLoading] = useState(false);

  const handleCalculation = (event) => {
    event.preventDefault()
    setLoading(true);
    console.log('image and scale');
  }

  return (
    <form className={styles.formBoxContainer}>
      <h2 className={styles.title}>Input your image</h2>
      <label>
        Upload File
        <br />
        {/* <input className={styles.label} type="file" name="image" accept="image/*" /> */}
        <input className={styles.label} type="file" accept="image/*" />
      </label>
      <label>
        Scale
        <br />
        <input className={styles.label} type="number" name="scalepixel" placeholder='number in (pixel)' /> : <input className={styles.label} type="number" name="scalemeter" placeholder='number in (m)' />
      </label>
      <br />
      <div className={`${styles.container} ${loading ? styles.loading : ''}`}>
      {loading ? <p>Loading...</p> : <p>Image Uploaded!</p>}
    </div>

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
