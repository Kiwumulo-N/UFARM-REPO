const express=require('express');
const  Registration2=require('../models/Registration2');
const router=express.Router();



router.get('/uf',(req,res)=>{
  res.render('urbanfarmer');
})

// router.post ('/uf',async(req,res)=>{
//   try{
//    // let searchItem = await Registration2.find()

//     const registration2=new Registration2(req.body)
//     await registration2.save();
//     // console.log(err);
//      res.redirect('/userlist');
//   } catch(err){
//     console.log(err);
//     res.status(400).send('Submission was not successful')
//   }
  

// })

// implementing passport local mongoose
router.post('/uf' ,async(req,res)=>{
  if(req.session.user) {
    try{
      const items= new Registration2(req.body);
      await Registration2.register(items,req.body.password, (err)=> {
         if (err)
          {
            throw err
          }
          res.render('ufarmlogin')
        })
  
    }  catch(err) {
      res.status(400).send('Sorry! something went wrong')
      console.log(err)
    }
    }else {
      console.log('cannot find seesion');
      res.redirect('/login');
  
  }
})

router.get('/userlist', async (req, res) => {
  if(req.session.user) {
  try {
    let items = await Registration2.find();
    console.log(items);
    res.render('tablelist1', { users: items });
  } catch (err) {
    res.status(400).send('cannot find the registration lists');
  }
}else {
  console.log('cannot find seesion');
  res.redirect('/login');
}
});




module.exports=router;