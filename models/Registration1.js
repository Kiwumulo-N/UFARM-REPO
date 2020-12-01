const mongoose = require("mongoose");
//const passportLocalMongoose=require("passport-local-mongoose");

const regschema = new mongoose.Schema({
  name: {
    type: String
  },
  roles:[{type:String}],
  username:{
    type:String,
    unique:true,
    required:'Please use the correct username'
  },
  ward: {
    type: Number
  },
  wardperiod: {
    type: Number
  },
  nin: {
    type: Number
  },
  birthdate: {
    type: String
  },
  registrationdate: {
    type: String
  },
  homeaddress: String,
  contact: {
    type: String
 },
  residencetype: [{type:String}],
  activities: [{type:String}],
  gender: [{type:String}],
});

// regschema.plugin(passportLocalMongoose);
module.exports = mongoose.model("Registration1", regschema);
