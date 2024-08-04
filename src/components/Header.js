import { useState } from "react";
import { Link } from "react-router-dom";

const Header =()=>{
    const [btnName,setBtnName]=useState('Login');

    // let btnName='Login'; 

    return (
        <div className="flex justify-between bg-pink-200 shadow-lg m-4 ">
            <div className='logo-container'> 
                <img  className=" w-16" src="https://static.vecteezy.com/system/resources/thumbnails/011/468/885/small/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg"/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4" to="/ "><Link>Home</Link></li>
                    <li className="px-4"><Link to="/about"> About</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={()=>{
                        btnName==='Login'?setBtnName('Logout'):setBtnName('Login')}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
