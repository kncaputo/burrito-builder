import React, { Component } from 'react';

class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: '',
      ingredients: [],
      error: ''
    };
  }

  handleNameChange = e => {
    this.setState({ error: '' });
    this.setState({ name: e.target.value});
  }

  handleIngredientChange = e => {
    e.preventDefault();
    this.setState({ error: '' });

    if (this.state.ingredients.length > 0) {
      this.setState( { ingredients: [e.target.name, ...this.state.ingredients] });
    } else {
      this.setState( { ingredients: [e.target.name] });
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.name.length <= 1) {
      this.setState({ error: 'Please provide a name' });
    } else if (this.state.ingredients.length === 0) {
      this.setState({ error: 'Please select at least one ingredient' });
    } else {
      const id = Date.now();
      const order = {id, name: this.state.name, ingredients: this.state.ingredients };
  
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

        {this.state.error &&
          <p>Please provide a name and select at least one ingredient</p>
        }

        <button onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
