const express = require('express');
const axios = require('axios');
const app = express();
const port = 9876;

const windowSize = 10;
let storedNumbers = [];

// Helper function to fetch numbers from the third-party API
const fetchNumbers = async (type) => {
  const apiMap = {
    'p': 'http://20.244.56.144/test/primes',
    'f': 'http://20.244.56.144/test/fibo',
    'e': 'http://20.244.56.144/test/even',
    'r': 'http://20.244.56.144/test/rand'
  };

  try {
    const response = await axios.get(apiMap[type], { timeout: 500 });
    return response.data.numbers;
  } catch (error) {
    console.error('Error fetching numbers:', error);
    return [];
  }
};

// Helper function to calculate average
const calculateAverage = (numbers) => {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return (sum / numbers.length).toFixed(2);
};

app.get('/numbers/:type', async (req, res) => {
  const type = req.params.type;

  if (!['p', 'f', 'e', 'r'].includes(type)) {
    return res.status(400).send('Invalid type parameter');
  }

  const prevState = [...storedNumbers];
  const newNumbers = await fetchNumbers(type);

  // Add new unique numbers to the storedNumbers array
  newNumbers.forEach(num => {
    if (!storedNumbers.includes(num)) {
      if (storedNumbers.length >= windowSize) {
        storedNumbers.shift(); // Remove the oldest number
      }
      storedNumbers.push(num); // Add the new number
    }
  });

  const avg = calculateAverage(storedNumbers);

  res.json({
    windowPrevState: prevState,
    windowCurrState: storedNumbers,
    numbers: newNumbers,
    avg: avg
  });
});

app.listen(port, () => {
  console.log(`Average Calculator microservice running on port ${port}`);
});
