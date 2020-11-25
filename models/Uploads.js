const mongoose=require('mongoose');

const uploadsschema= new mongoose.Schema({
  productname:{
      type:String
  },
  wardname:{
      type:String
  },
   uploadsdate:{
       type:String
   }, 
   unitprice:{
       type:String
   },
   quantity:{
       type:String
   },
   paymentmode:{
       type:String
   },
   deliverymode:{
       type:String
   },
   producttype:{
       type:String
   },
   directions:{
       type:String
   },
   productsavailability:{
       type:String
   },
   productimage:{
       type:String
   },
   userid:{
       type:String,
       unique:true
   },
   promos:{
       type:String
   },

})

module.exports= mongoose.model('Uploads',uploadsschema)