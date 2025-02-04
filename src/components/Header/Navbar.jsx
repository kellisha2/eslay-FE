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
                <NavLink to="/allproducts" className="nav-link">Shop</NavLink>
                <NavLink to="/addproduct" className="listing-link">Create a Listing</NavLink>
                
               
            </ul>
            <div>
                
            </div>

            {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src='logo.PNG'/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/products/women">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/addproduct">Accessories</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Collections </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Winter Sale</a></li>
                                    <li><a className="dropdown-item" href="#">Jumpsuits</a></li>
                                    <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                                </ul>
                            </li>
                        </ul> */}

            {/* </div>
                </div>
                <form className="search" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <Link to="/"> <HiOutlineShoppingBag /> </Link>
                <GrFavorite />
                <VscAccount />



            </nav> 
  */}

        </div>
    )
}

export default Navbar