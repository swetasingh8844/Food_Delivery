const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const mongoDB = require("./db");

// Initialize the database connection
mongoDB();

// Use the CORS middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies and other credentials
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Define routes
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));

// Handle root request
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

















// const express = require('express')
// const app = express()
// const port = 5000
// const mongoDB=require("./db")
// mongoDB();

// app.use((req,res,next)=>{
//   res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// })

// app.use(express.json())
// app.use('/api',require("./Routes/CreateUser"));
// app.use('/api',require("./Routes/DisplayData"));
// app.use('/api',require("./Routes/OrderData"));
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


// // const express = require('express');
// // const cors = require('cors');
// // const app = express();
// // const port = 5000;
// // const mongoDB = require("./db");
// // mongoDB();

// // // Use cors middleware
// // app.use(cors({
// //   origin: 'http://localhost:3000',
// //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
// //   credentials: true,
// // }));

// // // Express JSON parser
// // app.use(express.json());

// // // Routes
// // app.use('/api', require("./Routes/CreateUser"));
// // app.use('/api', require("./Routes/DisplayData"));
// // app.use('/api', require("./Routes/OrderData"));

// // // Handle root request
// // app.get('/', (req, res) => {
// //   res.send('Hello World!');
// // });

// // // Start server
// // app.listen(port, () => {
// //   console.log(`Example app listening on port ${port}`);
// // });
