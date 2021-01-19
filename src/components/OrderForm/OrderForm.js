import React, { Component } from 'react';

class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: '',
      ingredients: []
    };
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value})
  }

  handleIngredientChange = e => {
    e.preventDefault();

    if (this.state.ingredients.length > 0) {
      this.setState( { ingredients: [e.target.name, ...this.state.ingredients] })
    } else {
      this.setState( { ingredients: [e.target.name] })
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.name.length <= 1) {
      alert('Please include a name on your order');
    } else if (this.state.ingredients.length === 0) {
      alert('Please select at least one ingredient')
    } else {
      const id = Date.now();
      const order = {id, ...this.state};
  
      this.props.createOrder(order);
      this.clearInputs();
    }
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)} data-testid={ingredient}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>
      
        <button onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
