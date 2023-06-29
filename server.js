const express = require('express');
const axios = require('axios');
const app = express();
require('dotenv').config();

app.use(express.static('public', { index: 'home.html' }));


let accessToken = '';
let customerId = '';

// Get access token
app.get('/getAccessToken', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.finicity.com/aggregation/v2/partners/authentication',
      {
        partnerId: process.env.partnerId,
        partnerSecret: process.env.partnerSecret,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Finicity-App-Key': process.env.appKey,
          Accept: 'application/json',
        },
      }
    );

    accessToken = response.data.token;

    res.send(accessToken);
  } catch (error) {
    console.error('Error getting access token:', error);
    res.status(500).send('Error getting access token');
  }
});



// Get customer ID
app.get('/getCustomerId', async (req, res) => {
  //const { username } = req.query;
  const username = req.query.name;
  
  try {
    const response = await axios.post(
      'https://api.finicity.com/aggregation/v2/customers/testing',
      {
        username: username,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Finicity-App-Key': process.env.appKey,
          'Finicity-App-Token': accessToken,
          Accept: 'application/json',
        },
      }
    );

    customerId = response.data.id;
    updateTime = response.data.createdDate;
    uniqueUserName = response.data.username;
    res.send(customerId);
  } catch (error) {
    console.error('Error creating test user:', error);
    res.status(500).send('Error creating test user');
  }
});














// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
