import { useState, useEffect } from "react";
import axios from "./axios"

export function usePotentialData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/potential-result');
        const data = response.data.data;
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }
    ``
    // Call fetchData initially and then every 5 seconds
    fetchData();
    const intervalId = setInterval(fetchData, 5000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return data;
}

/**
 * How to use
 * function Potential() {
 *  const { potential_energy, potential_capacity, pv_number, global_irradiation, userInput } = usePotentialData();
 *
 *  return (
     <>
        <p>Potential Energy: {potential_energy}</p>
        <p>Potential Capacity: {potential_capacity}</p>
        <p>PV Number: {pv_number}</p>
        <p>Global Irradiation: {global_irradiation}</p>
        {userInput && (
          <div>
            <p>User Input:</p>
            <ul>
              <li>Scale: {userInput.scale}</li>
              <li>Module Width: {userInput.module_width}</li>
              <li>Module Length: {userInput.module_length}</li>
              <li>Capacity Per Module: {userInput.capacity_per_module}</li>
              <li>Location-Specific Solar Irradiance: {userInput.location_spesific_solar_irradiance}</li>
              <li>Efficiency Per Module: {userInput.efficiency_per_module}</li>
              <li>System Losses Percentage: {userInput.system_losses_percentage}</li>
            </ul>
          </div>
        )}
      </>
    );
  }
 */
