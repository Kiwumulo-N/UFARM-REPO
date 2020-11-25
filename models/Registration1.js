const mongoose = require("mongoose");
// const passportLocalMongoose=require("passport-local-mongoose");

const regschema = new mongoose.Schema({
  name: {
    type: String,
    required: "Please enter your fullname",
  },
  ward: {
    type: Number
  },
  wardduration: {
    type: Number
  },
  NIN: {
    type: Number
  },
  birthdate: {
    type: Date
  },
  registrationdate: {
    type: Date
  },
  homeaddress: String,
  contact: {
    type: String,
    required: "Please input the correct contact",
  },
  country: String,
  activities: String,
  gender: String,
});

// Registration1.plugin(passportLocalMongoose);
module.exports = mongoose.model("Registration1", regschema);
