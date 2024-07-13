import { useState } from "react";
import { Link } from "react-router-dom";

const Header =()=>{
    const [btnName,setBtnName]=useState('Login');

    // let btnName='Login'; 

    return (
        <div className="header">
            <div className='logo-container'> 
                <img  className=" logo" src="https://static.vecteezy.com/system/resources/thumbnails/011/468/885/small/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li to="/ "><Link>Home</Link></li>
                    <li><Link to="/about"> About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnName==='Login'?setBtnName('Logout'):setBtnName('Login')}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
