const mongoose=require('mongoose');
// const passportLocalMongoose=require("passport-local-mongoose");
const reg2schema= new mongoose.Schema({
 name:{
     type:String
 },
 username:{
     type:String,
     unique:true,
     required:'Please enter your right username'
 },
 roles: [{type:String}],
 
 ward:{
     type:String
 },
 wardperiod:String,
 nin:String,
 birthdate:String,
 registrationdate:String,
 activities:[{type:String}],
 contact:String,
 gender:[{
     type:String
 }],
 password:{
    type:String,
    required:true
 }

});
// reg2schema.plugin(passportLocalMongoose);
module.exports=mongoose.model('Registration2',reg2schema);