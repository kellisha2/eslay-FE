import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GrFavorite } from "react-icons/gr";
import { VscAccount } from "react-icons/vsc";
// import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';
// import "../src/components/Header/header.css"
import logo from '../../assets/logo.jpg'






function Navbar() {
    return (
        <div className='navbar'>
            <img src={logo} style={{width: "100px"}} />

            <ul className="navbar-links">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/products" className="nav-link">Shop</NavLink>
                <NavLink to="/addproduct" className="listing-link">Create a Listing</NavLink>
                
               
            </ul>
            <div>
                
            </div>

            

        </div>
    )
}

export default Navbar