import React from 'react';

const Beer = ({ beer }) => (
  <div>
    <h2>{beer.name}</h2>
    <p>{beer.price}</p>
    <img src={beer.image} alt="" />
  </div>
);

export default Beer;
