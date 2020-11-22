const mongoose=require('mongoose');

const reg2schema= new mongoose.Schema({
 name:{
     type:String
 },
 username:{
     type:String,
     unique:true
 },
 ward:{
     type:String
 },
 wardperiod:String,
 NIN:String,
 birthdate:Date,
 registrationdate:Date,
 activities:String,
 contact:String,
 password:{
     type:String,
     required:true
 },
 gender:[{
     type:String
 }]

})

module.exports=mongoose.model('Registration2',reg2schema);