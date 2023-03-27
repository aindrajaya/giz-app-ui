import React, { useState, useEffect } from 'react'
import axios from "../libs/axios"
import styles from "../styles/Main.module.css";
import ImageResultBox from './ImageResultBox';
import LoadingOverlay from 'react-loading-overlay';

const LoadingComponent = ({data}) => {
  // const [loading, setLoading] = useState(false);
  return(
    <div style={{backgroundColour:"gray", width:"100px", height:"100px"}} >Loading...</div>
  )
}

const FormBox = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [scale, setScale] = useState("");
  const [pixel, setPixel] = useState("");
  const [meter, setMeter] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [capacity, setCapacity] = useState("");
  const [irradiance, setIrradiance] = useState("");
  const [efficiency, setEfficiency] = useState("");
  const [systemLosses, setSystemLosses] = useState("");
  const [message, setMessage] = useState("");
  const [overlayActive, setOverlayActive] = useState(false)

  console.log(typeof(parseFloat(scale)), "tipe data scale")

  const handleCalculation = async (event) => {
    event.preventDefault()
    setLoading(true);
    setScale(handleScale(pixel, meter))
    const formData = new FormData();
    formData.append("file", file);
    formData.append("scalex", parseFloat(scale));
    formData.append("widthx", parseFloat(width));
    formData.append("lengthx", parseFloat(length));
    formData.append("capacityx", parseFloat(capacity));
    formData.append("irradiancex", parseFloat(irradiance));
    formData.append("efficiencyx", parseFloat(efficiency));
    formData.append("system_lossesx", parseFloat(systemLosses));
    console.log(formData, "form data input")
    await axios.post('/uploadimage', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => setMessage(response.data.message))
        .catch((e) => setMessage(`Upload failed ${e}`))
    }
    // try {
    //   const response = await axios.post("/uploadimage", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });
    //   setMessage(response.data.message);
    // } catch (error) {
    //   console.log(error);
    //   setMessage("Upload failed.");
    // }

  const handleScale = (a, b) => {
    return a/b
  }  

  return (
    <form className={styles.formBoxContainer} onSubmit={handleCalculation}>
      <h2 className={styles.title}>Input your image</h2>
      <label>
        Upload File
        <br />
        {/* <input className={styles.label} type="file" name="image" accept="image/*" /> */}
        <input className={styles.label} type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])}/>
      </label>
      <label>
        Scale
        <br />
        <input className={styles.label} type="number" name="scalepixel" value={pixel} placeholder='number in (pixel)'  onChange={(e) => setPixel(e.target.value)} required/> : <input className={styles.label} type="number" value={meter} name="scalemeter" placeholder='number in (m^2)'  onChange={(e) => setMeter(e.target.value)} required/>
      </label>
      <br />
      <div className={`${styles.container} ${loading ? styles.loading : ''}`}>
      {/* {loading ? <p>Loading...</p> : <p>Image Uploaded!</p>} */}
    </div>

      <div className={styles.horizontalShape}></div>
      <label>
        Input width and length per module (m)
        <br />
        <input className={styles.label} type="number" name="modulewidth" placeholder='width' value={width} onChange={(e) => setWidth(e.target.value)} required/> : <input className={styles.label} type="number" name="modulelength" placeholder='length' value={length} onChange={(e) => setLength(e.target.value)} required/>
      </label>

      <br />

      <label>
        Capacity per module (Wp)
        <br />
        <input className={styles.label} type="number" name="capacity" placeholder='watt peak' value={capacity} onChange={(e) => setCapacity(e.target.value)} required/>
      </label>

      <br />

      <label>
        Efficiency per module
        <br />
        <input className={styles.label} type="number" name="efficiency" placeholder='percentage' value={efficiency} onChange={(e) => setEfficiency(e.target.value)} required/>
      </label>

      <br />

      <label>
        Location specific solar irradiance (kWh/m2)
        <br />
        <input className={styles.label} type="number" name="location" placeholder='kilowatt hours per square meter' value={irradiance} onChange={(e) => setIrradiance(e.target.value)} required/>
      </label>

      <br />

      <label>
        Array + system Efficiency
        <br />
        <input className={styles.label} type="number" name="arraysystemlosses" placeholder='percentage' value={systemLosses} onChange={(e) => setSystemLosses(e.target.value)} required/>
      </label>

      <br />

      <button className={styles.buttonUpload} type="submit">Submit</button>
      {/* {message ? <p>{message}</p> : <LoadingComponent />} */}
    </form>
  );
};

export default FormBox;
