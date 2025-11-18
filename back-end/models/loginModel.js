//  LoginModel
//  {
//     "email": "abc@gmail.com",
//     "password": "123gfchf"
//  }
 
 
 const mongoose = require('mongoose');

 const loginSchema = new mongoose.Schema({

 email: {
     type: String,
     required: true,
     unique: true, // ensures no duplicate emails
 },
 password: {
     type: String,
     required: true,
     unique:true,
 },
 
 }, {
 timestamps: true // adds createdAt and updatedAt automatically
 });

 const Login = mongoose.model('Login', loginSchema);
 module.exports = Login;