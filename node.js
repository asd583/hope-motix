const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

// Example KBZ Pay API call (mock-up)
app.post('/initiate-payment', async (req, res) => {
  const { item, sender_name, sender_phone, id_last5, payment_method } = req.body;
  // Mocked response, assuming the
