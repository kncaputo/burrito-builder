const endpoint = 'http://localhost:3001/api/v1/orders';

export const getOrders = () => {
  return fetch(endpoint)
  .then(response => {
    if (!response.ok) {
      throw Error('Failed to fetch reservations');
    }
    return response.json()
  })
}

export const postOrders = (order, onSuccess) => {
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(order),
  })
  .then(response => {
    if (!response.ok) {
      throw Error('Failed to post order');
    }
    return response.json()
  })
  .then(() => onSuccess())
  .catch(error => console.log(error))
}