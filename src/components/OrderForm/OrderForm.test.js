import React from 'react';
import OrderForm from './OrderForm';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { } from '../sampleData';

describe('OrderForm', () => {
  let mockCreateOrder;

  beforeEach(() => {
    mockCreateOrder = jest.fn();

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

  
  
})