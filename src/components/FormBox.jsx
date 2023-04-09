import React, { useState, Fragment } from 'react'
import axios from "../libs/axios"

const FormBox = ({setLoadingState}) => {
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

  const handleCalculation = async (event) => {
    event.preventDefault()
    setLoadingState(true)
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
    setLoadingState(false)
  }

  const handleLoading = () => {
    setLoadingState(true);
    setTimeout(() => {
      setLoadingState(false);
    }, 5000);
  }

  const handleScale = (a, b) => {
    return a/b
  }  

  return (
    <Fragment>
      <form className="bg-white p-4 sm:p-8 m-8 rounded-lg w-full flex-col flex" onSubmit={handleCalculation}>
        <h2 className="text-4xl mb-8">Input your image</h2>
        <label>
          Upload File
          <br />
          {/* <input className="mb-1 px-4 py-2 rounded-md border border-gray-300 w-2/5" type="file" name="image" accept="image/*" /> */}
          <input className="mb-1 px-4 py-2 rounded-md border border-gray-300 w-2/5" type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])}/>
        </label>
        <label className="mt-5">
          Scale
          <br />
          <input className="mb-1 px-4 py-2 rounded-md border border-gray-300 w-2/5" type="number" name="scalepixel" value={pixel} placeholder='number in (pixel)'  onChange={(e) => setPixel(e.target.value)} required/> : <input className="mb-1 px-4 py-2 rounded-md border border-gray-300 w-2/5" type="number" value={meter} name="scalemeter" placeholder='number in (m²)'  onChange={(e) => setMeter(e.target.value)} required/>
        </label>
        <br />
        <div className="mx-auto max-w-2xl px-2">
      </div>

        <div className="bg-gray-400 h-px w-full rounded-lg my-8"></div>
        <label>
          Input width and length per module (m)
          <br />
          <input className="mb-1 px-4 py-2 rounded-md border border-gray-300 w-2/5" type="number" name="modulewidth" placeholder='width' value={width} onChange={(e) => setWidth(e.target.value)} required/> : <input className="mb-1 px-4 py-2 rounded-md border border-gray-300 w-2/5" type="number" name="modulelength" placeholder='length' value={length} onChange={(e) => setLength(e.target.value)} required/>
        </label>

        <br />

        <label>
          Capacity per module (Wp)
          <br />
          <input className="mb-1 px-4 py-2 rounded-md border border-gray-300 w-2/5" type="number" name="capacity" placeholder='watt peak' value={capacity} onChange={(e) => setCapacity(e.target.value)} required/>
        </label>

        <br />

        <label>
          Efficiency per module
          <br />
          <input className="mb-1 px-4 py-2 rounded-md border border-gray-300 w-2/5" type="number" name="efficiency" placeholder='percentage' value={efficiency} onChange={(e) => setEfficiency(e.target.value)} required/>
        </label>

        <br />

        <label>
          Location specific solar irradiance (kWh/m2)
          <br />
          <input className="mb-1 px-4 py-2 rounded-md border border-gray-300 w-2/5" type="number" name="location" placeholder='kilowatt hours per square meter' value={irradiance} onChange={(e) => setIrradiance(e.target.value)} required/>
        </label>

        <br />

        <label>
          Array + system Efficiency
          <br />
          <input className="mb-1 px-4 py-2 rounded-md border border-gray-300 w-2/5" type="number" name="arraysystemlosses" placeholder='percentage' value={systemLosses} onChange={(e) => setSystemLosses(e.target.value)} required/>
        </label>

        <br />

        <button className="w-24 h-9 bg-orange-500 hover:shadow-lg rounded-lg border-none text-white transition duration-400 ease-in-out" type='submit'>Submit</button>
        {/* {message ? <p>{message}</p> : <LoadingComponent />} */}
      </form>
    </Fragment>
  );
};

export default FormBox;
