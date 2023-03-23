import React from 'react'
import FormBox from './FormBox';
import styles from "../styles/Main.module.css";
import Image from 'next/image';
import building from '../../public/assets/building.png'
import ImageBox from './ImageBox';
import ResultBox from './ResultBox';

function MainForm() {
    const handleFormSubmit = (formValues) => {
        // Do something with formValues
        console.log(formValues);
      };
    
      return (
        <div className={styles.main}>
          <div className={styles.box}>
            <h2 className={styles.title}>Input your image</h2>
              <FormBox onSubmit={handleFormSubmit} />
          </div>
          <div className={styles.resultContainer}>
            <div className={styles.imageBox}>
              <Image
                        src={building}
                        alt="GIZ Logo"
                        width={200}
                        style={{borderRadius: '40px'}}
                    />
                    <ImageBox />
            </div>
            <div className={styles.resultBox}>
              <ResultBox />
            </div>
          </div>
        </div>
  )
}

export default MainForm