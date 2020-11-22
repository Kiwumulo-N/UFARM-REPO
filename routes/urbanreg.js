const express=require('express');
const  Registration2=require('../models/Registration2');
const router=express.Router();



router.get('/uf',(req,res)=>{
  res.render('urbanfarmer');
})

router.post ('/uf',async(req,res)=>{
  try{
   // let searchItem = await Registration2.find()

    const registration2=new Registration2(req.body)
    await registration2.save();
    console.log('save is sucessful')
    res.redirect('tablelist1');
  } catch(err){
res.status(400).send('Submission was not successful')
  }
  

})

router.get("/tablelist1", async (req, res) => {
  try {
    let items = await Registration2.find();
    console.log(items);
    res.render("tablelist1", { users: items });
  } catch (err) {
    res.status(400).send("cannot find the registration lists");
  }
});




module.exports=router;