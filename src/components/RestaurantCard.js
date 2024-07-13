const RestaurantCard=(props)=>{
    console.log('props', props);
    let cusine = '';
    if (props.cusine && Array.isArray(props.cusine)) {
        cusine = props.cusine.join(', ');
    }



    return (
        <div className='res-card'>
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + props.image}/>
            <h3> {props.resName}</h3>
            <h4> {cusine}</h4>
            <h4> {props.rating} </h4>
            <h4>{props.time}</h4>

        </div>
    )
}
export default RestaurantCard;