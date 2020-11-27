const mongoose=require('mongoose');
const passportLocalMongoose=require("passport-local-mongoose");

const reg2schema= new mongoose.Schema({
 name:{
     type:String
 },
 username:{
     type:String,
    unique:true,
    required:'Please enter your right username'
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
 gender:[{
     type:String
 }]

});

reg2schema.plugin(passportLocalMongoose);
module.exports=mongoose.model('Registration2',reg2schema);