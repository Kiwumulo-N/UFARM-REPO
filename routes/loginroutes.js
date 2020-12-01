//route to use for authentication not for saving data to db
const express=require('express');
const router=express.Router();
const passport=require('passport')
//const roles=require('roles');
// const { farmerone } = require('../roles');
// display the login page
 router.get('/login',(req,res)=>{
     res.render('ufarmlogin');
 })

//  var roles ={
//     farmerone:'farmerone',
//     urbanfarmer:'urbanfarmer',
//     public:' public'
// }
// module.exports = roles 

 //process the user name & password that are  submitted  in the login page
 //{failureRedirect:'/login'}
router.post('/login',  passport.authenticate('local',), (req,res)=>{
    req.session.user= req.user;
    // const userRoles= roles[req.user.roles]
    // if (userRoles == 'farmerone')
    // {
    //     res.redirect('/userlist')
    // }
    // else (userRoles == 'urbanfarmer')
    // {
    // res.redirect('/userlist')
    // }
    // if (condition) {
        
    // } else {
        
    // }
    
    res.redirect('/userlist');
 })



module.exports=router;