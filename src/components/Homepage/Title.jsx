import React from 'react'

const Title = ({text1, text2, text3}) => {
  return (
    <div className='homepage-titles'>
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>

    </div>
  )
}

export default Title