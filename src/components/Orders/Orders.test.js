import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { mockOrders } from '../../sampleData';
import Orders from './Orders';

describe('Orders', () => {
  it('should render correctly', () => {
    render(
      <Orders orders={mockOrders} />
    );

    const order1Name = screen.getByText('Pat')
    const order2Name = screen.getByText('Sam')
    
    expect(order1Name).toBeInTheDocument();
    expect(order2Name).toBeInTheDocument();
  });
});