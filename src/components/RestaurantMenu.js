import {useState, useEffect } from "react";
import {useParams} from "react-router-dom";

const RestaurantMenu=()=>{
    [resInfo,setResInfo]=useState([]);

    const {resId}= useParams();

    useEffect(()=>{
        fetchMenu() 

    },[]);

    const fetchMenu=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6347308&lng=77.30457109999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        // console.log(json)
        setResInfo(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(resInfo)
    }

    const {name,costForTwo,cuisines}=resInfo[0]?.info;


    return(
        <div className="menu">
            <h1>{resInfo[0]?.info?.name}</h1>
            <h2>Menu</h2>
            <ul>

                <li >
                    <div className="item">
                        <p>{costForTwo}</p>
                        <p>{cuisines.join(', ')}</p>
                    </div>
                </li>
                
            </ul>
            
        </div>
    )
}

export default RestaurantMenu;