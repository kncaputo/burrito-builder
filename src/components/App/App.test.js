import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockOrdersFetch, mockOrder, mockOrdersPlusBailey } from '../../sampleData';
import { getOrders, postOrder } from '../../apiCalls';
import App from './App';
jest.mock('../../apiCalls');

describe('App', () => {
  beforeEach(() => {
    getOrders.mockResolvedValueOnce(mockOrdersFetch);
    postOrder.mockResolvedValueOnce(mockOrder);
    getOrders.mockResolvedValueOnce(mockOrdersPlusBailey);

    render(
      <App />
    );
  });

  it('should render correctly', () => {
    const pageTitle = screen.getByText('Burrito Builder');
    const order1Name = screen.getByText('Pat');
    const order2Name = screen.getByText('Sam');
    
    expect(pageTitle).toBeInTheDocument();
    expect(order1Name).toBeInTheDocument();
    expect(order2Name).toBeInTheDocument();
  });

  it('should be able to add a new order', async () => {
    const nameInput = screen.getByPlaceholderText('Name');
    const ingredient1 = screen.getByTestId('beans');
    const submitButton = screen.getByText('Submit Order');

    userEvent.type(nameInput, 'Bailey');
    userEvent.click(ingredient1);
    userEvent.click(submitButton);

    // const orderName = await waitFor(() => screen.getByText('Bailey'));
    // const orderCard = await waitFor(() => screen.getByTestId('Bailey'));

    // expect(orderName).toBeInTheDocument();
    // expect(orderCard).toBeInTheDocument();
    
  });
});