import React from 'react'
import styles from "../styles/Main.module.css";
import pic from '../../public/assets/pic.png'
import Image from 'next/image';

function ResultBox() {
  return (
    <div className={styles.resultBoxContainer}>
        {/* <div>
            <Image
                src={pic}
                alt="Rooftop Icon"
                width={150}
                className={styles.picStyle}
            />
        </div> */}
        <div>
            <div className={styles.typographyContainer}>
                <h2>Overall</h2>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at elit tempor, consectetur turpis ac, maximus velit.</p>
                <p>Scale : 1:50.000</p>
                <p>Width & Length : 1:50.000</p>
                <p>Capacity : 1:50.000</p>
                <p>Efficiency : 1:50.000</p>
                <p>Location specific : 1:50.000</p>
                <p>Array+system losses : 1:50.000</p>
                <p className={styles.description}><span style={{color: 'red'}}>*</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        <div>
            <div className={styles.resultCardContainer}>
                <div className={styles.resultCard}>
                    <p>Maximum PV System Capacity</p>
                    <h2>414kWp</h2>
                </div>
                <div className={styles.resultCard}>
                    <p>Estimated Yearly Energy</p>
                    <h2>5.9kWh</h2>
                </div>
                <div className={styles.resultCard}>
                    <p>Estimated Yearly Energy</p>
                    <h2>5.9kWh</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResultBox