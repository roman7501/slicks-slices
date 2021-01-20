import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PizzaGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
`;

const PizzaStyles = styled.div`
  display: grid;
  grid-auto-rows: auto auto 500px;
  grid-row: span 3;
  grid-gap: 1rem;
  h2,
  p {
    margin: 0;
  }
`;

function SinglePizza({ pizza }) {
  return (
    <PizzaStyles>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2>
          <span className="mark">{pizza.name}</span>
        </h2>
      </Link>
      <p>{pizza.toppings.map((topping) => topping.name).join(', ')}</p>
      <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
    </PizzaStyles>
  );
}

const PizzaList = ({ pizzas }) => {
  const listPizzas = pizzas.map((pizza) => (
    <SinglePizza pizza={pizza} key={pizza.id} />
  ));
  return <PizzaGridStyles>{listPizzas}</PizzaGridStyles>;
};

export default PizzaList;
