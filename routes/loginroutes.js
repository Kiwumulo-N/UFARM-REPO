//route to use for authentication not for saving data to db
const express=require('express');
const router=express.Router();

 router.get('/login',(req,res)=>{
     res.render('ufarmlogin ');
 })
router.post('/login',(req,res)=>{
    console.log(req.body);
   res.redirect('/login');  
 })



module.exports=router;