import React, { useEffect, useContext, useState } from 'react'
import { MyProductsContext } from '../../App'


import React from 'react'

function MenProducts() {

    const { products } = useContext(MyProductsContext);
    const [menItems, setMenItems] = useState([])

     useEffect(() => {
            const filteredMenItems = products?.filter(product => product.gender.toLowerCase() == "men")
            console.log(filteredMenItems);
            setWomenItems(filteredMenItems)
        }, [products])
    

    return (
        <div>
            <h2></h2>
            <ul>
                {menItems.map(product => (
                    <li key={product.id}>
                        <img src={product.img}/>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </li>
                ))}

            </ul>

        </div>
    )
}

export default MenProducts