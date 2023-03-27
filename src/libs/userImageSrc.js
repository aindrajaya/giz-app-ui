import { useState, useEffect } from "react";
import axios from "./axios";

export function useImage() {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Call the API every 5 seconds
    const intervalId = setInterval(() => {
      axios.get('/image-result', { responseType: 'blob' })
        .then((response) => setImageSrc(URL.createObjectURL(response.data)))
        .catch((error) => console.error(error));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return imageSrc;
}
