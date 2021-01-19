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
    screen.debug()

    expect(nameInput).toBeInTheDocument();
  });
  
})