const express = require('express');
const app = express();
const morgan = require('morgan');
const userModel = require('./models/user'); // you have a user model defined in models/user.js
const connection = require('./config/db'); // you have a database connection defined in config/db.js
// Ensure the database connection is established before starting the server


app.use(morgan('dev'));
app.use(express.json());// Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true }));// Middleware to parse URL-encoded bodies
app.use(express.static('public')); // Serve static files from the 'public' directory

app.set('view engine', 'ejs');



app.get('/', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  res.send('About Page');
});
app.get('/profile', (req, res) => {
  res.send('Profile Page');
}
);

app.get('/register', (req, res) => {
  res.render('register');
});

// Handle form submission
//crud operation
//create
app.post('/register',async (req,res)=>{
  
  const {username, email, password} = req.body;
  const newUser = await userModel.create({
    username:username,
    email:email,
    password:password
  })

  res.send(newUser);
  // Here you would typically save the user data to the database
})
//read
app.get('/get-users',(req,res)=>{
  userModel.findOne(
    {
      username: 'c'
    }
  ).then((users)=>{

    console.log(users)
    res.send(users)
  })
})
//update

app.get('/update-user',async(req,res)=>{
  await userModel.findOneAndUpdate({
    username:'a'
  },{
    email:"c@c.com"
  })

  res.send("user update")
})

//delete 
app.get('/delete-user',async (req,res)=>{
    await userModel.findOneAndDelete({
      username:'a'
    })
    res.send('user deleted')
})

app.post('/get-form-data',(req,res)=>{
  console.log(req.body);
  res.send('data received');
})

app.listen(3000);