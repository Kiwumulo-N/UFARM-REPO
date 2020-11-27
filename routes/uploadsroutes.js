const express = require("express");
const router = express.Router();
const Uploads = require("../models/Uploads");

router.get("/uploads", (req, res) => {
  res.render("productslist");
});

router.post("/uploads", async (req, res) => {
  try {
    let up = Uploads(req.body);
    await up.save();
    console.log("save was sucessful")
    res.redirect("/ptable");
  } catch(err) {
    console.log(err);
    res.status(400).send("Upload wasnot succesful");
  }
});

router.get("/ptable",async(req,res)=>{
  try{
    let items =  await Uploads.find()
    res.render('producttable',{users:items}) 
    // console.log(items);
    // res.send("retrieve successful");

  } catch(err){
res.send("canot retrive data")
  }
})

module.exports = router;
