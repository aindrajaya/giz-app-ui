import React, { useState, useEffect } from 'react';
import styles from "../styles/Main.module.css";
import {usePotentialData} from '@/libs/usePotential';

function FormResultBox() {
  const data = usePotentialData()
  // const { potential_energy, potential_capacity, pv_number, global_irradiation, total_area, data.userInput } = data;

  return (
    <div className="flex-col justify-center">
      <div className="flex-col m-4">
        <h2>Potential Result</h2>
        {data?.userInput && (
          <>
            <p>Scale : {data.userInput.scale} pixel/m²</p>
            <p>Width & Length : {data.userInput.module_width} m & {data.userInput.module_length} m</p>
            <p>Capacity : {data.userInput.capacity_per_module} Wp</p>
            <p>Efficiency : {data.userInput.efficiency_per_module*100} %</p>
            <p>Location specific Irradiance : {data.userInput.location_spesific_solar_irradiance} kWh/m²</p>
            <p>Array+system Efficiency : {data.userInput.system_losses_percentage*100} %</p></>
        )}
      </div>
      <div>
        <div className="flex">
          <div className="text-s flex justify-end flex-col bg-blue-100 p-4 m-4 rounded-md">
            <p>Maximum PV System Capacity</p>
            <h3>{data?.potential_capacity ? data.potential_capacity/1000 : 0} kWp</h3>
          </div>
          <div className="text-s flex justify-end flex-col bg-blue-100 p-4 m-4 rounded-md">
            <p>Estimated Yearly Energy</p>
            <h3>{data?.potential_energy? parseInt(data.potential_energy) : 0} kWh</h3>
          </div>
          <div className="text-s flex justify-end flex-col bg-blue-100 p-4 m-4 rounded-md">
            <p>Total Area</p>
            <h3>{data?.total_area} m²</h3>
            {/* <p>400m</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormResultBox;
