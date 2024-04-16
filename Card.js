import React from "react"


    const Card=(props)=> {
        return(
             <div className="main-card">
                <div className="card-header">
                
                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.imgid}`} alt="" />
             </div>
             <div className="card-contain">
                         <h3>{props.restname}</h3>  
                         <p>{props.rating}</p>  
                         <h3>{props.dtime}</h3>
             </div>
             </div>
        )
    }
    export default Card