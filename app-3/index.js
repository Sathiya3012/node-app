const express = require('express');
const app = express();
const PORT = 3000;

// Routes
app.get('/', (req, res) => {
  res.send('Hello, from app-3');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
