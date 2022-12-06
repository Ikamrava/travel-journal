import React from 'react'
import locationIcon from "./images/location.png"
import "./card.css"

function Card(props) {
    const {title,location,googleMapsUrl,startDate,endDate,description,imageUrl} = props
  return (
    <div className='cardWrapper'>
       

        <div className="imageContainer">
            <img src={imageUrl} alt="" />
        </div>

        <div className="infoWrapper">

            <div className="locationWrapper">
                <img src={locationIcon} alt="Map Icon" width={"10px"} height={"16px"} />
                <p>{location}</p>
                <a href={googleMapsUrl} target="_blank">View on Google Maps</a>
            </div>

            <div className="title">
               <h1>{title}</h1>
            </div>

            <div className="dateWrapper">
                <p>{startDate} - {endDate}</p>
            </div>

            <p className='desc'>{description}</p>
        </div>
        
    </div>
  )
}

export default Card
