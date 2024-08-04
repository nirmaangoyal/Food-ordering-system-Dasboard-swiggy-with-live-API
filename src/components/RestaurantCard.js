const RestaurantCard=(props)=>{
    console.log('props', props);
    let cusine = '';
    if (props.cusine && Array.isArray(props.cusine)) {
        cusine = props.cusine.join(', ');
    }



    return (
        <div className='p-4 m-4 w-[250px] bg-gray-100 hover:bg-gray-200 rounded-xl'>
            <img className="rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + props.image}/>
            <h3> {props.resName}</h3>
            <h4> {cusine}</h4>
            <h4> {props.rating} </h4>
            <h4>{props.time}</h4>

        </div>
    )
}
export default RestaurantCard;