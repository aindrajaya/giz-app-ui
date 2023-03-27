import React from 'react'

function ImageResultBox(props) {
  return (
    <div>
      <img src={props.imageUrl} alt="Uploaded Image" />
    </div>
  )
}

export default ImageResultBox
