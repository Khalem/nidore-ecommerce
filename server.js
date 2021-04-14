const express = require('express');
const path = require('path');

if (process.env.NODE_ENV !== 'production' ) require('dotenv').config();

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET);

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    })
}

app.listen(port, error => {
    if (error) throw error;
    console.log(`Server running on port: ${port}`);
});

// get stripe payment intent
app.post('/payment_intents', async (req, res) => {
    try {
        const { amount, name, shippingAddress } = req.body;

        /* 
            as theres no way for me to actually get an order number, I'm going to simulate one with a random number
            (this is required as I'm going to use an order number on the checkout success page)
            I could generate it on that page, but this way the order number will at least be saved in stripe
        */
        const orderNumber = Math.random() * (200000, 100000) + 100000;

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'eur',
            shipping: {
                name,
                address: shippingAddress,
                tracking_number: orderNumber.toFixed(0)
            }
        });

        res.status(200).send({ clientSecret: paymentIntent.client_secret, stripeOrderNumber: orderNumber.toFixed(0) });
    } catch (error) {
        res.status(500).json({ statusCode: 500, message: error.message });
    }
});