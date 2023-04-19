const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');
const textData = require('./config')
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

// Route for the blog page
app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "blog.html"));
});

// Route for the contact us page
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

const port = 8000;
const hostname = "127.0.0.1";
app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
