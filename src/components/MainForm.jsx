import React, { useState } from 'react';
import FormBox from './FormBox';
import FormResultBox from './FormResultBox';
import ImageResultBox from './ImageResultBox';

function MainForm() {
  return (
    <div className="flex bg-[#ecf5f8] w-screen">
      <div className="flex flex-col w-45vw">
        <FormBox setLoadingState={setLoadingState}/>
      </div>
      <div className="flex flex-col w-fit ml-8">
        <div className="flex flex-col justify-center items-center p-4 bg-white m-8 rounded-lg">
          <ImageResultBox />
        </div>
        <div className="flex flex-col p-4 bg-white m-8 rounded-lg">
          <FormResultBox />
        </div>
      </div>
    </div>
  )
}

export default MainForm