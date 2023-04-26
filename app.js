const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// firebase 
const firebase = require('firebase/app');
require('firebase/firestore');

const firebaseConfig = {
  // your Firebase configuration object
  apiKey: "AIzaSyCBxxGVAKt7OJ8tT6HWZPeaIGcc6-TPyhw",
  authDomain: "data-9e2bc.firebaseapp.com",
  projectId: "data-9e2bc",
  storageBucket: "data-9e2bc.appspot.com",
  messagingSenderId: "706239189368",
  appId: "1:706239189368:web:936f01eea049a9c514b88d",
  measurementId: "G-7JVCN16FM9"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


// const textData = require('./config')
// const firebase = require('firebase');
// app.use(express.json());
// app.use(cors());

// app.post("/create", async(req, res)=>{
//   const data = req.body;
//   await textData.add(data);
//   console.log("data added: ", data) 
//   res.send({msg:'Data inserted!'})
// })

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Route for the home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// route for secure data page
app.get("/securedata", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "securedata.html"));
});

// to stext page
app.get("/stext", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "stext.html"));
});

// Route for the blog page
app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "blog.html"));
});

// Route for the contact us page
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

//post method
app.post("/stext", (req, res) => {
  const key = req.body.key; // access the 'key' field from the form
  const textData = req.body.textData; // access the 'textData' field from the form
  const jsonData = JSON.stringify({key, textData});
  console.log(jsonData); // the string to be sent to the API
  fetch('http://127.0.0.1:8080/process-string', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:textData // send the input string as JSON in the request body
  })
    .then(response => response.json()) // convert the response to JSON format
    .then(data => {
      console.log(data); // this is your JSON data received from the API
      // you can store this JSON data in a variable or use it in any way you want
    })
    .catch(error => console.error(error)); // handle any errors that may occur
  
  res.send('Data received!');
});

const port = 8000;
const hostname = "127.0.0.1";
app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
