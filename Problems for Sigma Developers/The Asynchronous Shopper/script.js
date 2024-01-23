function placeOrder() {
    // Generate a random delay between 1 and 5 seconds (in milliseconds)
    const randomDelay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
    
    // Return a Promise that resolves with an order confirmation after the random delay
    return new Promise((resolve) => {
        setTimeout(() => {
        const orderConfirmation = `Order placed successfully! Confirmation number: ${Math.floor(Math.random() * 100000)}`;
        resolve(orderConfirmation);
      }, randomDelay);
    });
  }
  
  // Example usage
  placeOrder()
    .then((confirmationMessage) => {
      console.log(confirmationMessage);
    })
    .catch((error) => {
      console.error('Error placing order:', error);
    });
  