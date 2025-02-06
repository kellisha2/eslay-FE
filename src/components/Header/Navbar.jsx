import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GrFavorite } from "react-icons/gr";
import { VscAccount } from "react-icons/vsc";
// import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';
// import "../src/components/Header/header.css"
import logo from '../../assets/logo.jpg'
import { MyProductsContext } from '../../App';

function Navbar() {
    const { isAdmin, setIsAdmin } = useContext(MyProductsContext)

    const handleChange = () => {
        setIsAdmin(!isAdmin)
    }

    return (
        <div className='navbar'>
            <Link to="/"><img src={logo} style={{ width: "100px" }} /></Link>
            <ul className="navbar-links">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/products" className="nav-link">Shop</NavLink>
                <NavLink to="/addproduct" className="listing-link">Create a Listing</NavLink>
            </ul>
            <div>

                <label className="flex items-center cursor-pointer toggle-button">
                    <input type="checkbox" value="" className="sr-only peer" onChange={handleChange}/>
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                        <span className="ms-3 text-sm font-medium text-black-900 dark:text-gray-300">Admin</span>
                </label>

            </div>
        </div>
    )
}

export default Navbar