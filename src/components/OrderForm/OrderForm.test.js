import React from 'react';
import OrderForm from './OrderForm';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('OrderForm', () => {
  let mockCreateOrder;
  // let mockAlert;

  beforeEach(() => {
    mockCreateOrder = jest.fn();
    // mockAlert = jest.fn();

    render(
      <OrderForm createOrder={mockCreateOrder}/>
    );
  });

  it('should render correctly', () => {
    const nameInput = screen.getByPlaceholderText('Name');
    const ingredient1 = screen.getByText('beans');
    const ingredient2 = screen.getByText('steak');
    const ingredient3 = screen.getByText('carnitas');
    const submitButton = screen.getByText('Submit Order');


    expect(nameInput).toBeInTheDocument();
    expect(ingredient1).toBeInTheDocument();
    expect(ingredient2).toBeInTheDocument();
    expect(ingredient3).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should create order on click if name, and at least one ingreident are provided', () => {
    const nameInput = screen.getByPlaceholderText('Name');
    const ingredient1 = screen.getByText('beans');
    const submitButton = screen.getByText('Submit Order');

    userEvent.type(nameInput, 'Bailey');
    userEvent.click(ingredient1);
    userEvent.click(submitButton);

    expect(mockCreateOrder).toHaveBeenCalled();
  });

  it('should not be able to submit form without a name', () => {
    const ingredient1 = screen.getByText('beans');
    const submitButton = screen.getByText('Submit Order');

    userEvent.click(ingredient1);
    userEvent.click(submitButton);

    const nameInputError = screen.getByText('Please provide a name');

    expect(mockCreateOrder).not.toHaveBeenCalled();
    expect(nameInputError).toBeInTheDocument();
  });

  it('should not be able to submit form without at least one ingredient', () => {
    const nameInput = screen.getByPlaceholderText('Name');
    const submitButton = screen.getByText('Submit Order');

    userEvent.type(nameInput, 'Bailey');
    userEvent.click(submitButton);

    const ingredientInputError = screen.getByText('Please select at least one ingredient');

    expect(mockCreateOrder).not.toHaveBeenCalled();
    expect(ingredientInputError).toBeInTheDocument();
  });
});