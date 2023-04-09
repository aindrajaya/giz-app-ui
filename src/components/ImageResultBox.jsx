import { useImage } from '@/libs/userImageSrc';
import Image from 'next/image';
import React, { Fragment } from 'react'

function ImageResultBox() {
  const imageSrc = useImage();

  return (
    <Fragment>
      <h1 className='font-bold text-2xl'>Potential Result</h1>
      <div className='flex-col p-0'>
        {imageSrc && (
          <Image  width={400} height={400} src={imageSrc} alt="Generated Mask"/>
        )}
      </div>
    </Fragment>
  )
}

export default ImageResultBox
