import { useState, useEffect } from "react";
import axios1 from "./axios";
import axios from "axios";

export function useImage() {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    async function getImageData(){
      try {
        // const res = await axios1.get('/image-result', { responseType: 'blob' })
        const res = await axios.get('http://localhost:8000/image-result', {responseType: 'blob'})
        const data = res.data
        setImageSrc(URL.createObjectURL(data))
      } catch (error) {
        console.log(error)
      }
    }
    getImageData();
    const intervalId = setInterval(getImageData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return imageSrc;
}
