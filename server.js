const express = require('express');
const path = require('path');
const app = express();

// Serve static files from /public
app.use(express.static('public'));

// Serve HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Export app (for Vercel)
module.exports = app;
