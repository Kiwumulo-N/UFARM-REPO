
const validate = (event)=>{
    console.log(event);
    event.preventDefault();
   const uname=document.getElementById('name');
   const nameError=document.getElementById('nameErr');

   if(uname.value=='') {
       uname.style.border='1px solid green';
       nameError.innerHTML='Field Required';
       nameError.style.color='red';
       // uname.focus();
       // return false;
   }

   const uemail=document.getElementById('email');
   const emailError=document.getElementById('emailErr');
   
   if(uemail.value==''){
       emailError.innerHTML='Put correct email';
       emailError.style.color='Red';
       uemail.focus();
   }

   const uphone=document.getElementById('phone');
   const phoneError=document.getElementById('phoneErr');
   
   if(uphone.value==''){
       phoneError.innerHTML='Put correct email';
       phoneError.style.color='Red';
       uphone.focus();
   }

   const ucountry=document.getElementById('country');
   const countryError=document.getElementById('countryErr');
   
   if(ucountry.value==''){
       countryError.innerHTML='Put correct email';
       countryError.style.color='Red';
       ucountry.focus();
   }
      

   


}