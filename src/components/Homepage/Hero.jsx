import React from 'react'

const Hero = ({heroData, setHeroCount, heroCount}) => {
  return (
    <div className='hero'>
        <div className='hero-text'> 
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>

        <div className="how">
            <a><p>How It Works</p></a>
            
        </div>
        <div className='hero-page-move'>
            <ul className='hero-dots'>
                <li onClick={() =>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
                <li onClick={() =>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
                <li onClick={() =>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>

            </ul>
        </div>
    </div>
  )
}

export default Hero