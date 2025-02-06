const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Error handler for 404 errors
app.use((req, res, next) => {
  res.status(404).send('Sorry, that resource was not found.');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
