import React from 'react'
import firstpic from "../../assets/firstpic.jpg";
import womancloset from '../../assets/womancloset.jpg'
import makemoney from '../../assets/makemoney.webp'

const Background = ({ heroCount }) => {

    if (heroCount=== 0) {
        return (
            <img src={firstpic} className='background' />
        )
    } else if (heroCount === 1) {
        return (
            <img src={womancloset} className='background' />
        )
    } else if (heroCount === 2) {
        return (
            <img src={makemoney} className='background' />
        )
    }
}

export default Background