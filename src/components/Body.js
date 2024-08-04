import useOnlineStatus from "../../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Body=()=>{
    const [listofRes,setlistofRes]=useState([]);
    const [searchText,setSearchText]=useState('')

    useEffect(()=>{
        fetchData()
    },[])

    if(!useOnlineStatus()){
        return <div className="body">You are offline</div>
    }
 

    
    const fetchData=async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6347308&lng=77.30457109999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json)
        setlistofRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    } 
    console.log(listofRes)


 


    return (
        <div className="body">
            <div className='filter flex'>
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" placeholder="Search for Restaurants"
                     value={searchText}
                     onChange={(e)=>{
                            setSearchText(e.target.value)
                     }}/> 
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-xl" onClick={() => {
                            // Filter the restaurant based on the search
                            const filterRes = listofRes.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setlistofRes(filterRes);
                        }}
                    >Search</button> 
                </div>
                <div  className="search m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-100 rounded-xl" onClick={()=>{
                    const filteredList=listofRes.filter((res)=>res.info?.avgRating>4.2);
                    setlistofRes(filteredList)

                }}>Top Rated Restaurant</button> 
            </div>
            </div>
            <div className='flex flex-wrap'>
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