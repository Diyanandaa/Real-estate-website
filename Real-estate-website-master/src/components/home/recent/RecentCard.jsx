// import React from "react"
import React, { useState } from "react";
import { list } from "../../data/Data"

const RecentCard = () => {
  const [heartClicked, setHeartClicked] = useState(Array(list.length).fill(false));
  const handleHeartClick = (index) => {

    const updatedHeartClicked = [...heartClicked];
    updatedHeartClicked[index] = !updatedHeartClicked[index];
    setHeartClicked(updatedHeartClicked);
  }
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  {/* <i className='fa fa-heart'></i> */}
                  <i className='fa fa-heart' style={{ color: heartClicked[index] ? "red" : "inherit" }} onClick={() => handleHeartClick(index)}></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
              </div>
              <div className='button flex'>
                <div>
                 <a href="./contact"> <button className='btn2'>{price}</button></a> <label htmlFor=''>/sqft</label>
                </div>
                <span>{type}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default RecentCard
