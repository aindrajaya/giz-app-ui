import { useImage } from '@/libs/userImageSrc';
import Image from 'next/image';
import React from 'react'

function ImageResultBox() {
  const imageSrc = useImage();

  return (
    <div className='flex-col p-0'>
      {imageSrc && (
        <Image  width={400} height={400} src={imageSrc} alt="Generated Mask"/>
      )}
    </div>
  )
}

export default ImageResultBox
