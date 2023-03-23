import React from 'react';
import styles from "../styles/Main.module.css";

const FormBox = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload File
        <br />
        <input className={styles.label} type="file" name="image" accept="image/*" />
      </label>
      <br />
      <label>
        Scale
        <br />
        <input className={styles.label} type="text" name="firstscale" placeholder='Input number' /> : <input className={styles.label} type="text" name="secondscale" placeholder='Input number' />
      </label>
      <br />
      <button className={styles.buttonUpload} type="submit">Upload</button>

      <div className={styles.horizontalShape}></div>

      <label>
        Input width and length per module (m)
        <br />
        <input className={styles.label} type="text" name="widthlength" />
      </label>

      <br />

      <label>
        Capacity per module (Wp)
        <br />
        <input className={styles.label} type="text" name="capacity" />
      </label>

      <br />

      <label>
        Efficiency per module (%)
        <br />
        <input className={styles.label} type="text" name="efficiency" />
      </label>

      <br />

      <label>
        Location specific solar irradiance (kWh/m2)
        <br />
        <input className={styles.label} type="text" name="location" />
      </label>

      <br />

      <label>
        Array + system losses (%)
        <br />
        <input className={styles.label} type="text" name="arraysystemlosses" />
      </label>

      <br />

      <button className={styles.buttonUpload} type="submit">Next</button>
    </form>
  );
};

export default FormBox;
