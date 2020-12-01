const express = require('express');
const app = express();
const bodyParser= require('body-parser');
require('dotenv').config(); 
const mongoose = require('mongoose');
const path=require('path');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});
const Uploads=require('./models/Uploads')
const Registration2=require('./models/Registration2')
const Registration1=require('./models/Registration1')
const regRoutes=require('./routes/registrationroutes');
const loginRoutes=require('./routes/loginroutes');
const urbanregs=require('./routes/urbanreg')
const uploadsRoutes=require('./routes/uploadsroutes')
const publics=require('./routes/publicsroutes')

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });


//
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

//middle ware
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'));

app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

//passport configs

// passport.use(Registration1.createStrategy());
// passport.serializeUser(Registration1.serializeUser());
// passport.deserializeUser(Registration1.deserializeUser());

//using imported routes
app.use('/',loginRoutes);
app.use('/',regRoutes);
app.use('/',urbanregs);
app.use('/',uploadsRoutes);
app.use('/',publics)


app.post('/logout',(req,res)=>{
if(req.session){
  req.session.destroy(function (err){
    if (err){

    }else {
      return res.redirect('/login')
    }
  })
}

  

})




 











app.listen(3000, () => console.log('listening on port 3000')); 