// Backend server for Stripe payments with confirmation
// You'll need to install: npm install express stripe cors dotenv

require('dotenv').config();
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Your React app URL
  credentials: true
}));

// Create payment intent
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'usd', items, customer } = req.body;

    // Validate required fields
    if (!amount || !items || !customer) {
      return res.status(400).json({ 
        error: 'Missing required fields: amount, items, customer' 
      });
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount), // Ensure it's an integer
      currency: currency,
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        customerName: customer.name,
        customerEmail: customer.email,
        customerAddress: customer.address,
        itemCount: items.length.toString(),
        orderItems: JSON.stringify(items.map(item => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price
        })))
      }
    });

    // Log the payment intent creation
    console.log('Payment Intent created:', paymentIntent.id);
    console.log('Amount:', amount, 'Currency:', currency);
    console.log('Customer:', customer.name, customer.email);

    res.json({ 
      client_secret: paymentIntent.client_secret,
      payment_intent_id: paymentIntent.id
    });

  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ 
      error: 'Failed to create payment intent',
      details: error.message 
    });
  }
});

// Handle successful payment
app.post('/api/payment-success', async (req, res) => {
  try {
    const { paymentIntentId, items, customer, total } = req.body;

    // Retrieve the payment intent to verify it was successful
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status === 'succeeded') {
      // Here you would typically:
      // 1. Save the order to your database
      // 2. Send confirmation email to customer
      // 3. Update inventory
      // 4. Generate invoice/receipt

      console.log('=== ORDER CONFIRMED ===');
      console.log('Payment ID:', paymentIntentId);
      console.log('Customer:', customer.name, customer.email);
      console.log('Items:', items);
      console.log('Total:', total);
      console.log('=====================');

      // Generate a more user-friendly order ID
      const friendlyOrderId = `KK-${Date.now().toString().slice(-6)}`;

      res.json({ 
        success: true,
        orderId: friendlyOrderId,
        paymentIntentId: paymentIntentId,
        message: `Thank you ${customer.name}! Your order has been confirmed and will be processed shortly.`,
        customerEmail: customer.email,
        orderTotal: total,
        estimatedDelivery: '3-5 business days'
      });
    } else {
      res.status(400).json({ 
        error: 'Payment was not successful',
        status: paymentIntent.status
      });
    }

  } catch (error) {
    console.error('Error handling payment success:', error);
    res.status(500).json({ 
      error: 'Failed to process payment confirmation',
      details: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Stripe payment server is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`💳 Stripe integration ready`);
  console.log(`🔗 Frontend should connect to: http://localhost:${PORT}`);
});

module.exports = app;
