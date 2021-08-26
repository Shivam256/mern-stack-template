//libs
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');


//vars
const SERVER_PORT = 8080;

mongoose.connect('mongodb://localhost:27017/db-name', {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false})
.then(()=>{
  console.log('SUCCESSFULLY CONNECTED TO DATABASE!');
})
.catch((err)=>{
  console.log('FAILED TO CONNECT TO DATABASE!',err);
})

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.get('/test',(req,res)=>{
  res.status(200).send('SUCCESSFULLY CONNECTED TO BACKEND');
})


app.listen(SERVER_PORT,() =>{
  console.log(`SUCCESSFULLY STARTED SERVER ON PORT ${SERVER_PORT}`);
})