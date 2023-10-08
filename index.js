const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const user = require('./routes/user'); 


// Middleware for parsing JSON request bodies
app.use(bodyParser.json());


app.use('/user', user); 

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
