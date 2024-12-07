// Import express
const express = require('express');
const path = require('path'); // Import path module

// Create an instance of express
const app = express();

// Define the route for the homepage
app.get('/', (req, res) => {
    // Send the HTML file to the client
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Define the port number
const port = 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
