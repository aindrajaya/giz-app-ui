import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/Main.module.css';
import ImageResultBox from './ImageResultBox';
import FormBox from './FormBox';

function ImageBox() {
  const [loading, setLoading] = useState(false);

  const handleUpload = () => {
    setLoading(true);
    console.log('image and scale');
  }

  return (
    <div className={styles.box}>
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
      <button className={styles.buttonUpload} onClick={handleUpload} type="submit">Upload</button>
      <br />
      {loading && <p>Loading...</p>}
      {!loading && <ImageResultBox />}
    </div>
  );
}

export default ImageBox;
