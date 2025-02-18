import React, { useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import nav_dropdown from '../../Assets/nav_dropdown.png';
import logo from '../../Assets/logo.png';
import cart_icon from '../../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
    const {getTotalCartItems} = useContext(ShopContext);
    const [menu, setMenu] = useState("shop");
    const menuRef = useRef();
    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    };

    return (
        <div className = "navbar">
            <div className = "nav-logo">
                <img src = {logo} alt = "logo" />
                <p>SHOPPER</p>
            </div>
            <img className="nav-dropdown" src={nav_dropdown} alt="nav_dropdown" onClick={dropdown_toggle}/>
            <ul ref={menuRef} className = "nav-menu">
                <li onClick={() =>{setMenu("shop")}}><Link to="/" style={{textDecoration:'none'}}>Shop</Link>{menu === "shop" ? <hr/> : <></>}</li>
                <li onClick={() =>{setMenu("mens")}}><Link to="/mens" style={{textDecoration:'none'}}>Men</Link>{menu === "mens" ? <hr/> : <></>}</li>
                <li onClick={() =>{setMenu("womens")}}><Link to="/womens" style={{textDecoration:'none'}}>Womens</Link> {menu === "womens" ? <hr/> : <></>}</li>
                <li onClick={() =>{setMenu("kids")}}><Link to="/kids" style={{textDecoration:'none'}}>Kids</Link>{menu === "kids" ? <hr/> : <></>}</li>
            </ul>
            <div className = "nav-login-cart">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/cart"><img src = {cart_icon} alt = "cart-icon" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};