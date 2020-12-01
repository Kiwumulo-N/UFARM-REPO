//routes should be left open for someone to register i.e it shouldn't be used for authentication
//unlike for the login,the register are meant for saving data to db

const express = require("express");
const Registration1 = require("../models/Registration1");
//const Registration2 = require("../models/Registration2");
const router = express.Router();

router.get("/fo", (req, res) => {
  res.render("fo_register");
});

router.post("/fo", async (req, res) => {
  // if(req.session.user){
    try {
      const items = new Registration1(req.body);
      //console.   log(registration1);
      // await Registration1.register(items,req.body.password,(err)=>{
      await items.save();
      console.log("save was sucessful")
      res.redirect("/folist");
      } catch (err) {
      res.status(400).send("Submission was not succesful");
      console.log(err);
    }
  // }else {
  //   console.log('cannot find seesion');
  //   res.redirect('/login');
// }
})
  
  router.get("/folist", async (req, res) => {
    //if(req.session.user){
      try {
        // let items=await Registration2.find();
        let items=await Registration1.find();
    
        console.log(items);
        res.render("tablelist1", { users: items });
      } catch (err) {
        res.status(400).send("cannot find the registration lists");
      }
  
    // }else {
    //   console.log('cannot find seesion');
    //   res.redirect('/login');
    // }
  });
  
  router.post("/delete", async (req, res) => {
    try {
      await Registration1.deleteOne({ _id: req.body.id });
      res.redirect("back");
    } catch (err) {
      res.status(400).send("unable to delete to the database");
    }
  
});

router.get("/folist", async (req, res) => {
  // if(req.session.user){
    try {
      // let items=await Registration2.find();
      let items=await Registration1.find();
  
      console.log(items);
      res.render("tablelist1", { users: items });
    } catch (err) {
      res.status(400).send("cannot find the registration lists");
    }
  
  // }else {
  //   console.log('cannot find seesion');
  //   res.redirect('/login');
  // }

});

// router.post("/delete", async (req, res) => {
//   try {
//     await Registration1.deleteOne({ _id: req.body.id });
//     res.redirect("back");
//   } catch (err) {
//     res.status(400).send("unable to delete to the database");
//   }
// });

router.get("/update/:id" ,async(req,res)=>{
  if(req.session.user){
    try{
      const updatefo =await  Registration1.findOne({_id:req.params.id})
      res.render("update",{user:updatefo});
    
    }catch (err){
      console.log(err);
  res.status(400).send("unable to get the file from the database");
    }
  
  }else {
    console.log('cannot find seesion');
    res.redirect('/login');
  }

})

router.post("/update",async(req,res)=>{
  // if(req.session.user){
    try{
      await Registration1.findOneAndUpdate({_id:req.query.id},req.body);
      res.redirect("/userlist")
    
    }catch(err){
      console.log(err);
      res.status(400).send("cannot post updated data to the db")
    }
  
  // }else {
  //   console.log('cannot find seesion');
  //   res.redirect('/login');
  // }
})

module.exports = router;
