const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// connecting mongodb atlas
const db = 'mongodb+srv://yogendra:FuEK1BqTMjpqi4NT@cluster0.xyzqx3g.mongodb.net/splitshield?retryWrites=true&w=majority';
mongoose.connect(db, {
  useNewUrlParser: true
}).then(() => {
  console.log('connected to database');
}).catch(error=>{
  console.log(error);
  console.log("error occured while connecting to database")
})

let islogin = false;
let checkmail = '';

// Define schema for collection seta
const setaSchema = new mongoose.Schema({
  mail: {
    type: String,
    required: true
  },
  key: {
    type: String,
    required: true,
    unique: true
  },
  output1: {
    type: String,
    required: true
  }
});

// Define schema for collection setb
const setbSchema = new mongoose.Schema({
  mail: {
    type: String,
    required: true
  },
  key: {
    type: String,
    required: true,
    unique: true
  },
  output2: {
    type: String,
    required: true
  }
});

// Define schema for collection signup
const signup = new mongoose.Schema({
  uname: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Define schema for collection login
const login = new mongoose.Schema({
  mail: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create models for each collection
const SetA = mongoose.model('seta', setaSchema);
const SetB = mongoose.model('setb', setbSchema);
const signUp = mongoose.model('signup', signup);


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Route for the home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// route for secure data page
app.get("/securedata", (req, res) => {
  if(islogin){
    res.sendFile(path.join(__dirname, "public", "securedata.html"));
  }else{
    res.sendFile(path.join(__dirname, "public", "login.html"));
  }
});

// to stext page
app.get("/stext", (req, res) => {
  if(islogin){
    res.sendFile(path.join(__dirname, "public", "stext.html"));
  }else{
    res.sendFile(path.join(__dirname, "public", "login.html"));
  }
});

// to getData page
app.get("/getData", (req, res) => {
  if(islogin){
    res.sendFile(path.join(__dirname, "public", "getData.html"));
  }else{
    res.sendFile(path.join(__dirname, "public", "login.html"));
  }
});

// Route for the blog page
app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "blog.html"));
});

// Route for the contact us page
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

// to stext page
app.get("/pending", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pending.html"));
});

// to signup page
app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "signup.html"));
});

//post request to signup
app.post("/signup", async (req, res) => {
  try{
    // const uname = req.body.name;
    checkmail = req.body.email;
    // let passwd = req.body.passwd;

    // Store data in signup collection
    const signupData = {
      uname: req.body.name,
      mail: req.body.email,
      password: req.body.passwd
    }
    await signUp.create(signupData);
    console.log('signup done')
    islogin = true;
    res.sendFile(path.join(__dirname, "public", "index.html"));
  }catch(error){
    // res.status(400).render('fail', { error: 'Error occurred during signup' , file: 'signup'});
    res.send(error);
  }
});

// to login page
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});


//post request to login
app.post("/login", async (req, res) => {
  try{
    checkmail = req.body.email;

    // checking the values
    const check = await signUp.findOne({mail:req.body.email})

    if(check.password === req.body.passwd){
      islogin = true;
      res.sendFile(path.join(__dirname, "public", "index.html"));
    }else{
      res.status(400).render('fail', { error: 'Incorrect password' , file: 'login'});
    }
  }catch(error){
    res.status(400).render('fail', { error: 'Error occurred during login' , file: 'login'});
  }
});






const port = process.env.PORT || 3000;
const hostname = "127.0.0.1";
app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

