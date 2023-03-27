import { useState, useEffect } from "react";
import axios from "./axios";

export function useImage() {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    async function getImageData(){
      try {
        const res = await axios.get('/image-result', { responseType: 'blob' })
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
