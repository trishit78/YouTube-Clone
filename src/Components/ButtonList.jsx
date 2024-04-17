import React from 'react'

const ButtonItems = ["All","IPL","Music","Comedy","JavaScript","Web Series","Game Shows","Live","Mixes","Arijit Singh","Skills",]


function ButtonList() {
  return (
    <div>
      {
        ButtonItems.map((item,index)=>(
            <button key={index} className= 'border border-gray-200 bg-gray-200 ml-2 text-black px-4 py-1 rounded-lg'>{item}</button>
        ))
      }
       
    </div>
  )
}

export default ButtonList
