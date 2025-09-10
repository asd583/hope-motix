const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let orders = []; // Store orders

// Example route to receive the order from the form
app.post('/order', (req, res) => {
    const { productId, fullName, email, address } = req.body;

    const newOrder = {
        id: orders.length + 1,
        productId,
        fullName,
        email,
        address,
        status: 'Pending' // Example order status
    };

    orders.push(newOrder);

    res.json({ message: 'Order received successfully', order: newOrder });
});

// Example route to handle payment processing (simplified)
app.post('/payment', (req, res) => {
    // Here, you would handle payment processing logic (e.g., using PayPal or Stripe)
    res.json({ message: 'Payment processed successfully' });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
