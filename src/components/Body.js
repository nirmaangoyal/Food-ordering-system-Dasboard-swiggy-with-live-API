import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";

const Body=()=>{
    const [listofRes,setlistofRes]=useState([]);
    const [searchText,setSearchText]=useState('')

    useEffect(()=>{
        fetchData()
    },[])
 

    
    const fetchData=async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6347308&lng=77.30457109999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        // console.log(json)
        setlistofRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    } 
    console.log(listofRes)


 


    return (
        <div className="body">
            <div className='filter '>
                <div className="search">
                    <input type="text" className="search-boc" placeholder="Search for Restaurants"
                     value={searchText}
                     onChange={(e)=>{
                            setSearchText(e.target.value)
                     }}/> 
                    <button className="search-btn" onClick={() => {
                            // Filter the restaurant based on the search
                            const filterRes = listofRes.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setlistofRes(filterRes);
                        }}
                    >Search</button> 
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList=listofRes.filter((res)=>res.info?.avgRating>4.2);
                    setlistofRes(filteredList)

                }}>Top Rated Restaurant</button> 
            </div>
            <div className='res-container'>
                {listofRes.map((res,index)=>(
                    <RestaurantCard key={index} resName={res?.info?.name} cusine={res?.info?.cuisines} rating={res?.info?.avgRating} time={res?.info?.sla?.deliveryTime} image={ res?.info?.cloudinaryImageId}/>
                ))}
                {/* // <RestaurantCard/> */}
                {/* <RestaurantCard resName="KFC" cusine="Biryani"/> */}
            </div>
        </div>
    )
}

export default Body;