import React from 'react'

function Experiences({ datas }) {
    console.log(datas)
  return (
    <div className="cursus mb3">
        <h2 className="h2">Experiences Professionnelles</h2>
        {datas.map(item =>  
        <div className="grid__row" key={item.id}>
            <div className="grid__item">
                <h3 className="grid__employer">{item.employer}</h3>
                <p className="grid__date">{item.date}</p>
            </div>
            <div className="grid__item">
                <h3 className="grid__text">{item.text}</h3>
                <p className="grid__location">{item.location}</p>
            </div>
        </div>
    )}
       
    </div>
  )
}

export default Experiences