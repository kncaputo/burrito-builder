import React from 'react';
import './Orders.css';

const Orders = props => {
  const orderEls = props.orders.map(order => {
    const { id, name, ingredients } = order;

    return (
      <div className="order" key={id} data-testid={name}>
        <h3>{name}</h3>
        <ul className="ingredient-list">
          {ingredients.map(ingredient => {
            return <li key={`${id}${ingredient}`}>{ingredient}</li>
          })}
        </ul>
      </div>
    )
  });

  return (
    <section>
      { orderEls.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export default Orders;