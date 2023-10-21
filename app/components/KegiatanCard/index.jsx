import React from "react";


const Index = ({ imageUrl, title, desc}) => {
  return (
    <div>
      <div  className="h-52 md:h-72 rounded-t-xl relative group"
        style={{  background: `url(${imageUrl})`, backgroundSize: "cover" }}>

      </div>
      <div className="text-white">
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>
    </div>
  )
}


export default Index;