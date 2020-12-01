
const validate = ()=>{
    // console.log(event);
    // event.preventDefault();
   const uname=document.getElementById('name');
   const nameError=document.getElementById('nameErr');

   if(uname.value=='') {
       uname.style.border='1px solid green';
       nameError.innerHTML='Field Required';
       nameError.style.color='red';
       // uname.focus();
        return false;
   }

    const userv=document.getElementById('user');
    const userError=document.getElementById('userErr');
   
   if(userv.value==''){
       userError.innerHTML='Put correct username';
       userError.style.color='Red';
       return false;
       //userv.focus();
   }

   const uwar=document.getElementById('war');
   const warError=document.getElementById('warErr');
   
   if(uwar.value==''){
       warError.innerHTML='Put correct ward number';
       warError.style.color='Red';
      // uwar.focus();
       return false;
    }

   const uwarp=document.getElementById('warp');
   const warpError=document.getElementById('warpErr');
   
   if(uwarp.value==''){
       warpError.innerHTML='Put correct ward period';
       warpError.style.color='Red';
       return false;
       //uwarp.focus();
   }
   const unin=document.getElementById('nin');
   const ninError=document.getElementById('ninErr');
   
   if(unin.value==''){
       ninError.innerHTML='Put correct NIN';
       ninError.style.color='Red';
       return false;
       // unin.focus();
   }

   const ubd=document.getElementById('bd');
   const bdError=document.getElementById('bdErr');
   
   if(ubd.value==''){
       bdError.innerHTML='Put correct birthdate';
       bdError.style.color='Red';
       return false;
       //ubd.focus();
   }

const urd=document.getElementById('rd');
const rdError=document.getElementById('rdErr');

if(urd.value==''){
    rdError.innerHTML='Put correct registrationdate';
    rdError.style.color='Red';
    return false;
    //urd.focus();
} 


const uha=document.getElementById('ha');
const haError=document.getElementById('haErr');

if(uha.value==''){
    haError.innerHTML='Put correct home address';
    haError.style.color='Red';
    return false;
    //uha.focus();
}

const ucon=document.getElementById('con');
const conError=document.getElementById('conErr');

if(ucon.value==''){
 conError.innerHTML='Put correct registrationdate';
 conError.style.color='Red';
 return false;
 //ucon.focus();
}

const upass=document.getElementById('pass');
const passError=document.getElementById('passErr');

if(upass.value==''){
 passError.innerHTML='Put a correct password please';
 passError.style.color='Red';
 return false;
 //upass.focus();
}



return (true);
}


      

   


