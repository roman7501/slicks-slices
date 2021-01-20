import React from 'react';
import Img from 'gatsby-image';
import MenuItemsStyles from '../styles/MenuItemStyles';
import formatMoney from '../utils/formatMoney';
import calculatePizzaPrice from '../utils/calculatePizzaPrice';

const PizzaOrder = ({ order, pizzas, removeFromOrder }) => (
  <>
    {order.map((singleOrder, index) => {
      const pizza = pizzas.find((pizza) => pizza.id === singleOrder.id);
      return (
        <MenuItemsStyles key={`${singleOrder.id}-${index}`}>
          <Img fluid={pizza.image.asset.fluid} />
          <h2>{pizza.name}</h2>
          <p>
            {formatMoney(calculatePizzaPrice(pizza.price, singleOrder.size))}
            <button
              type="button"
              className="remove"
              title={`Remove ${singleOrder.size} ${pizza.name}`}
              onClick={() => removeFromOrder(index)}
            >
              &times;
            </button>
          </p>
        </MenuItemsStyles>
      );
    })}
  </>
);

export default PizzaOrder;
