import React from 'react'

const CenterImg = ({ url, maxWidth, paddingBottom }) => {
  return (
    <div className='center_img_wrap' style={{ maxWidth }}>
      <div className='center_img' style={{ paddingBottom }}>
        <img src={url} />
      </div>
    </div>
  )
}

export default CenterImg