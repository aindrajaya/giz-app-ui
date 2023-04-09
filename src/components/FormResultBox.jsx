import React, { useState, useEffect } from 'react';
import styles from "../styles/Main.module.css";
import {usePotentialData} from '@/libs/usePotential';

function FormResultBox() {
  const data = usePotentialData()
  // const { potential_energy, potential_capacity, pv_number, global_irradiation, total_area, data.userInput } = data;

  return (
    <div className="flex-col justify-center">
      <div className="flex-col m-4">
        <h1 className='font-bold text-2xl'>Potential Result</h1>
        {data?.userInput && (
          <>
            <p>Scale : <span className='font-bold'>{data.userInput.scale} pixel/m²</span></p>
            <p>Width & Length : <span className='font-bold'>{data.userInput.module_width} m & {data.userInput.module_length} m</span></p>
            <p>Capacity : <span className='font-bold'>{data.userInput.capacity_per_module} Wp</span></p>
            <p>Efficiency : <span className='font-bold'>{data.userInput.efficiency_per_module*100} %</span></p>
            <p>Location specific Irradiance : <span className='font-bold'>{data.userInput.location_spesific_solar_irradiance} kWh/m²</span></p>
            <p>Array+system Efficiency : <span className='font-bold'>{data.userInput.system_losses_percentage*100} %</span></p></>
        )}
      </div>
      <div>
        <div className="flex">
          <div className="text-s flex justify-end flex-col bg-blue-100 p-4 m-4 rounded-md">
            <p className='text-lg font-semibold'>Maximum PV System Capacity</p>
            <h3><span className='font-bold'>{data?.potential_capacity ? data.potential_capacity/1000 : 0} kWp</span> </h3>
          </div>
          <div className="text-s flex justify-end flex-col bg-blue-100 p-4 m-4 rounded-md">
            <p className='text-lg font-semibold'>Estimated Yearly Energy</p>
            <h3><span className='font-bold'>{data?.potential_energy? parseInt(data.potential_energy) : 0} kWh</span></h3>
          </div>
          <div className="text-s flex justify-end flex-col bg-blue-100 p-4 m-4 rounded-md">
            <p className='text-lg font-semibold'>Total Area</p>
            <h3><span className='font-bold'>{Math.floor(data?.total_area)} m²</span></h3>
            {/* <p>400m</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormResultBox;
