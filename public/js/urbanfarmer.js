
const validate = ()=>{
    // console.log(event);
    // event.preventDefault();
   const uname=document.getElementById('name');
   const nameError=document.getElementById('nameErr');
  // if(name.length <3 ||  name.length>50 ){
    //         alert("check the length of the field");
    //         return false;
    //uname.value.length <3 ||  uname.value.length>50
   // /^[A-Za-z]{5,50}/

   if(uname.value=='') {
       uname.style.border='1px solid green';
       nameError.innerHTML='Field Required';
       nameError.style.color='red';
       // uname.focus();
        return false;
   }

   const usname=document.getElementById('username');
   const usnameError=document.getElementById('usnameErr');
   
   var Regex2=/^[0-9a-zA-Z]+$/;

   if(usname.value.match(Regex2)){
        usname.style.border='';
       usnameError.innerHTML='';
       usnameError.style.color='';
      //usname.focus();
      // return false;
   }else {
    usname.style.border='1px solid green';
    usnameError.innerHTML='Put correct username';
    usnameError.style.color='Red';

   }

   const uward=document.getElementById('ward');
   const uwardError=document.getElementById('wardErr');
   
   if(uward.value==''){
       uwardError.innerHTML='Put correct email';
       uwardError.style.color='Red';
       //uward.focus();
      // return false;
   }

   const uwardperiod=document.getElementById('wardperiod');
   const uwardperiodError=document.getElementById('wardperiodErr');
   
   if(uwardperiod.value==''){
       uwardperiodError.innerHTML='Put correct email';
       uwardperiodError.style.color='Red';
      // uwardperiod.focus();
      // return false;
   } 

   const uNIN=document.getElementById('NIN');
   const uNINError=document.getElementById('NINErr');
   
   if(uNIN.value==''){
       uNINError.innerHTML='Put correct email';
       uNINError.style.color='Red';
      // uwardperiod.focus();
      // return false;
   } 

   const ubd=document.getElementById('birthdate');
   const ubdError=document.getElementById('birthdateErr');
   
   if(ubd.value==''){
       ubdError.innerHTML='Put correct email';
       ubdError.style.color='Red';
      // uwardperiod.focus();
      // return false;
   } 

   const urd=document.getElementById('registrationdate');
   const urdError=document.getElementById('regErr');
   
   if(urd.value==''){
       urdError.innerHTML='Put correct email';
       urdError.style.color='Red';
      // uwardperiod.focus();
      // return false;
   }

   const ucontact=document.getElementById('contact');
   const contactError=document.getElementById('contactErr');
  // if(name.length <3 ||  name.length>50 ){
    //         alert("check the length of the field");
    //         return false;
    var Regex3=/^\d{10}$/ ;
   if(ucontact.value.match(Regex3)) {
       ucontact.style.border='';
       contactError.innerHTML='';
       contactError.style.color='';
       // uname.focus();
        //return false;
   }else{
    ucontact.style.border='1px solid green';
    contactError.innerHTML='wrong contact';
    contactError.style.color='red';

   }

   const upassword=document.getElementById('password');
   const passwordError=document.getElementById('passwordErr');
  // if(name.length <3 ||  name.length>50 ){
    //         alert("check the length of the field");
    //         return false;
    var Regex2=/^[0-9a-zA-Z]+$/;

   if(upassword.value.match(Regex2)) {
       upassword.style.border='';
       passwordError.innerHTML='';
       passwordError.style.color='';
       // uname.focus();
        //return false;
   }else{
    upassword.style.border='1px solid green';
    passwordError.innerHTML='wrong password';
    passwordError.style.color='red';


   }

//creating two regexes for ward period, username & name
   
   


      
// else {
//     alert('The form has been successfully submited')
// }
   


}