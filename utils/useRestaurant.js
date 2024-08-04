import { useState,useEffect } from "react";
import React from 'react'


const useRestaurant = (resId) => {
    const [resInfo,setResInfo]=useState([]);
    // const {resId}= useParams();
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

    return resInfo

}

export default useRestaurant