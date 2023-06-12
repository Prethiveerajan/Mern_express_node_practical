// // const express = require('express');
// // const app = express();

// // // Middleware to parse JSON request bodies
// // app.use(express.json());

// // // Route for handling GET requests
// // app.get('/api/users', (req, res) => {
// //   // Your logic for handling GET requests goes here
// //   res.json({ message: 'GET request received' });
// // });

// // // Route for handling POST requests
// // app.post('/api/users', (req, res) => {
// //   // Your logic for handling POST requests goes here
// //   console.log(req.body); // Accessing the request body
// //   res.json({ message: 'POST request received' });
// // });

// // /
// // app.put('/api/users/:id', (req, res) => {
// //   // Your logic for handling PUT requests goes here
// //   const userId = req.params.id; // Accessing the parameter in the URL
// //   console.log(`Updating user with ID: ${userId}`);
// //   console.log(req.body); // Accessing the request body
// //   res.json({ message: `PUT request received for user with ID: ${userId}` });
// // });

// // // Route for handling DELETE requests
// // app.delete('/api/users/:id', (req, res) => {
// //   // Your logic for handling DELETE requests goes here
// //   const userId = req.params.id; // Accessing the parameter in the URL
// //   console.log(`Deleting user with ID: ${userId}`);
// //   res.json({ message: `DELETE request received for user with ID: ${userId}` });
// // });

// // // Start the server
// // app.listen(3000, () => {
// //   console.log('Server is listening on port 3000');
// // });

// const express = require('express');
// const app = express();
// const http = require('http');


// app.use(express.json());


// app.get('/api/users', (req, res) => {

//   res.json({ message: 'GET request received' });
// });


// app.post('/api/users', (req, res) => {
  
//   console.log(req.body); 
//   res.json({ message: 'POST request received' });
// });


// app.put('/api/users/:id', (req, res) => {
  
//   const userId = req.params.id; 
//   console.log(`Updating user with ID: ${userId}`);
//   console.log(req.body); 
//   res.json({ message: `PUT request received for user with ID: ${userId}` });
// });


// app.delete('/api/users/:id', (req, res) => {
  
//   const userId = req.params.id; 
//   console.log(`Deleting user with ID: ${userId}`);
//   res.json({ message: `DELETE request received for user with ID: ${userId}` });
// });

// const server = http.createServer(app);

// server.listen(3000, () => {
//   console.log('Server is listening on port 3000');
// });
