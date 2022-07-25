const express = require('express');
const mongoose = require('mongoose');
const Form = require('./schema.js');
const cors = require('cors');
const { response } = require('express');
//express app
const app =express();
//connect to mongodb
const dbURI = "mongodb+srv://dbUser:Kanav@form.3ag4o.mongodb.net/form-main?retryWrites=true&w=majority"
mongoose.connect(dbURI)
.then((result)=>{app.listen(5000);})
.catch((err)=>{console.log("error in connecting to DB")});
app.get('/',(req,res)=>{
res.send("kanav");
})
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post('/post_data',(req,res)=>{
console.log((req.body));
const form = new Form((req.body));
form.save();
})
