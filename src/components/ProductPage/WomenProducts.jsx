import React, { useEffect, useContext, useState } from 'react'
import { MyProductsContext } from '../../App'


function WomenProducts() {

    const { products } = useContext(MyProductsContext);
    const [womenItems, setWomenItems] = useState([])

    useEffect(() => {
        const filteredWomenItems = products?.filter(product => product.gender.toLowerCase() == "women")
        console.log(filteredWomenItems);
        setWomenItems(filteredWomenItems)
    }, [products])

    return (
        <div>
            <h2></h2>
            <ul>
                {womenItems.map(product => (
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

export default WomenProducts