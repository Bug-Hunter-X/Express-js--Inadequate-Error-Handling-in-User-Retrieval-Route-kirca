const express = require('express');
const app = express();

app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... database operation to fetch user data using async/await ...
    if (!userData) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(userData);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Failed to retrieve user data' });
  }
});

//Centralized error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(3000, () => console.log('Server listening on port 3000'));