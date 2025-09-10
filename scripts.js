const nodemailer = require('nodemailer');

// Setup Nodemailer transporter (using Gmail SMTP as an example)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jexx200628@gmail.com',
        pass: 'password',
    }
});

// Function to send confirmation email
function sendConfirmationEmail(order) {
    const mailOptions = {
        from: 'jexx200628@gmail.com',
        to: order.email,
        subject: `Order Confirmation - Product: ${order.productName}`,
        text: `
            Thank you for your purchase, ${order.fullName}!

            Order Details:
            Product: ${order.productName}
            Price: $${order.price}
            Shipping Address: ${order.address}

            Your order will be shipped soon. We'll notify you when it's on its way.

            Thank you for shopping with us!
        `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
app.post('/order', (req, res) => {
    const { productId, fullName, email, address } = req.body;

    const newOrder = {
        id: orders.length + 1,
        productId,
        fullName,
        email,
        address,
        status: 'Pending',  // Example order status
        productName: 'Item 1', // Add dynamically based on the product selected
        price: 50, // Dynamically set the price
    };

    orders.push(newOrder);

    // Send confirmation email
    sendConfirmationEmail(newOrder);

    res.json({ message: 'Order received successfully', order: newOrder });
});
