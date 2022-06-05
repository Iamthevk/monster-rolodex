import React from 'react';
import "./card.styles.css"

function Card({monster}) {
    const {id,name,website} = monster
  return (
    <div className="card-container">
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
    <h2>{name}</h2>
    <h4 className='website'>Website:</h4><br/>
    <p>{website}</p>

    </div>
  )
}

export default Card;