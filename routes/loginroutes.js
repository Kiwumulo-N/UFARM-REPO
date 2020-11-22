//route to use for authentication not for saving data to db
const express=require('express');
const router=express.Router();

 router.get('/',(req,res)=>{
     res.render('fo_register');
 })
router.post('/',(req,res)=>{
    console.log(req.body);
   res.render('fo_register');  
 })



module.exports=router;