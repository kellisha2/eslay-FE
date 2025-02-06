import React, {useState , useEffect} from 'react'
import firstpic from "../../assets/firstpic.jpg";
import womancloset from '../../assets/womancloset.jpg'
import makemoney from '../../assets/makemoney.webp'
import Hero from '../Homepage/Hero';
import Navbar from '../Header/Navbar';


const Homepage = () => {

    let heroData = [
        {text1:"Have a ton of", text2:"clothes you don't wear?"},
        {text1:"Want to get rid of them", text2:"and make some good money?"},
        {text1:"eSlay is the", text2:"solution you're looking for!"}
  
    ]
  
    const [heroCount, setHeroCount] = useState(0);
  
    useEffect(() => {
      setInterval(() => {
        setHeroCount((count) => {return count === 2?0:count+1})
      }, 3000)
    }, [])

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

    return(
        <>
              <Hero 
                    heroData={heroData[heroCount]}
                    heroCount={heroCount} 
                    setHeroCount={setHeroCount}
              /> 
        </>
    )
        // <Hero 
        //             heroData={heroData[heroCount]}
        //             heroCount={heroCount} 
        //             setHeroCount={setHeroCount}
        //       />
    
}

export default Homepage