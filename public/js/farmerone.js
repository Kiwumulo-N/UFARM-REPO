// Accessing elements in the HTML form
 const regform = document.getElementById('form');
 const uname=document.getElementById('name');
//  const urole=document.getElementById('role');
 const userv=document.getElementById('user');
 const uwar=document.getElementById('war');
 const uwarp=document.getElementById('warp');
 const unin=document.getElementById('nin');
 const ubd=document.getElementById('bd');
 const urd=document.getElementById('rd');
 const uha=document.getElementById('ha');
 const ucon=document.getElementById('con');
//  const urt=document.getElementById('rt');
//  const uact=document.getElementById('act');
//  const ugender=document.getElementById('gender');
 const upass=document.getElementById('pass');

 //Errors
 const nameError=document.getElementById('nameErr');
//  const roleError=document.getElementById('roleErr');
 const userError=document.getElementById('userErr');
 const warError=document.getElementById('warErr');
 const warpError=document.getElementById('warpErr');
 const ninError=document.getElementById('ninErr');
 const bdError=document.getElementById('bdErr');
 const rdError=document.getElementById('rdErr');
 const haError=document.getElementById('haErr');
 const conError=document.getElementById('conErr');
//  const rtError=document.getElementById('rtErr');
//  const actError=document.getElementById('actErr');
//  const genderError=document.getElementById('genderErr');
 const passError=document.getElementById('passErr');
 // Add eventlistener to the form
regform.addEventListener('submit', (event)=>{
    // event.preventDefault();
    validate();
});

const validate = ()=>{
    let nameRegex = /^[A-Za-z]/;
    if(uname.value===''){
        nameError.innerHTML='Field Required';
        nameError.style.color='red';
        uname.style.border='1px solid red';
        return false
    }
    else if (!uname.value.match(nameRegex)){
        nameError.innerHTML='Provide a valid name';
        nameError.style.color='red';
        uname.style.border='1px solid red';
        return false
    }
    else if (uname.value.match(nameRegex)){
        uname.style.border='1px solid green';
    
    };


    // if (urole.value === "Select your role"){
    //     roleError.innerHTML='Field required ';
    //     roleError.style.color='red';
    //     urole.style.border='1px solid red';
    //     return false
    
    // }
    // else if(!urole.value === "Select your role") {
    //     urole.style.border='1px solid green';
        
    
    // }
    

    let alphanumeric = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/;
    if(userv.value==''){
        userError.innerHTML='Field Required';
        userError.style.color='red';
        userv.style.border='1px solid red';
        return false
    }
    else if(!userv.value.match(alphanumeric)){
        userError.innerHTML='Provide a valid username';
        userError.style.color='red';
        userv.style.border='1px solid red';
        return false
        
    }
    else if (userv.value.match(alphanumeric)){
        userv.style.border='1px solid green';
    
    };
    // let text = /^[A-Za-z]+$/
    let Regex5=/^\d{1}$/;
    if(uwar.value==''){
       warError.innerHTML='Field Required';
       warError.style.color='red';
       uwar.style.border='1px solid red';
       return false
   }
   else if(!uwar.value.match(Regex5)){
       warError.innerHTML='Provide a valid ward no';
       warError.style.color='red';
       uwar.style.border='1px solid red';
       return false
   }
   else if (uwar.value.match(Regex5)){
    uwar.style.border='1px solid green';

};

    // let nan = /^((?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{13})+$/;
    let Regex4=/^\d{10}$/;
    if(unin.value==''){
        ninError.innerHTML='Field Required';
        ninError.style.color='red';
        unin.style.border='1px solid red';
        return false
    }
    else if(!unin.value.match(Regex4)){
        ninError.innerHTML='Provide a valid nin no';
        ninError.style.color='red';
        unin.style.border='1px solid red';
        return false
    }
    else if (unin.value.match(Regex4)){
        unin.style.border='1px solid green';
    
    };

//      let Regex3=/^\d{10}$/;
// if(ucon.value==''){
//      conError.innerHTML='Field Required';
//      conError.style.color='red';
//      ucon.style.border='1px solid red';
//      return false
//  }
//  else if(!ucon.value.match(Regex3)){
//      conError.innerHTML='Provide a valid contact';
//      conError.style.color='red';
//      ucon.style.border='1px solid red';
//      return false
//  }
//  else if (ucon.value.match(Regex3)){
//     ucon.style.border='1px solid green';

// };

let Regex2=/^\d{10}$/;
if(upass.value==''){
     passError.innerHTML='Field Required';
     passError.style.color='red';
     upass.style.border='1px solid red';
     return false
 }
 else if(!upass.value.match(Regex2)){
     passError.innerHTML='Provide a valid password';
     passError.style.color='red';
     upass.style.border='1px solid red';
     return false
 }
 else if (upass.value.match(Regex3)){
    // passError.innerHTML='';
    // passError.style.color='';
    upass.style.border='1px solid green';

};



// if(urt.value ==="Select your residence type"){
//     rtError.innerHTML='Field required';
//     rtError.style.color='red';
//     urt.style.border='1px solid red';
//     return false
// }
// else if (!urt.value ==="Select your residence type"){
//     urt.style.border='1px solid green';
// }

// if(uact.value ==="Choose your activities"){
//     actErrorr.innerHTML='Field is required';
//     actErrorr.style.color='red';
//     uact.style.border='1px solid red';
//     return false
// }
// else if (!uact.value ==="Choose your activities"){
//     uact.style.border='1px solid green';
// }

// if(ugender.value==="Choose your gender"){
//     genderError.innerHTML='Feild is required';
//     genderError.style.color='red';
//     ugender.style.border='1px solid red';
//     return false
// }
// else if (!ugender.value==="Choose your gender"){
//     ugender.style.border='1px solid red';
// }




}

//    const nameError=document.getElementById('nameErr');
//    const Regex3=/^\d{10}$/;
//    if(uname.value.match(Regex3)) {
//        uname.style.border='1px solid green';
       
       
//        // uname.focus();
//         return false;
//    }

//     const userv=document.getElementById('user');
//     const userError=document.getElementById('userErr');
   
//    if(userv.value==''){
//        userError.innerHTML='Put correct username';
//        userError.style.color='Red';
//        return false;
//        //userv.focus();
//    }

//    const uwar=document.getElementById('war');
//    const warError=document.getElementById('warErr');
//    const warError=document.getElementById('warErr');
   
//    if(uwar.value==''){
//        warError.innerHTML='Put correct ward number';
//        warError.style.color='Red';
//       // uwar.focus();
//        return false;
//     }

//    const uwarp=document.getElementById('warp');
//    const warpError=document.getElementById('warpErr');
   
//    if(uwarp.value==''){
//        warpError.innerHTML='Put correct ward period';
//        warpError.style.color='Red';
//        return false;
//        //uwarp.focus();
//    }
//    const unin=document.getElementById('nin');
//    const ninError=document.getElementById('ninErr');
   
//    if(unin.value==''){
//        ninError.innerHTML='Put correct NIN';
//        ninError.style.color='Red';
//        return false;
//        // unin.focus();
//    }

//    const ubd=document.getElementById('bd');
//    const bdError=document.getElementById('bdErr');
   
//    if(ubd.value==''){
//        bdError.innerHTML='Put correct birthdate';
//        bdError.style.color='Red';
//        return false;
//        //ubd.focus();
//    }

// const urd=document.getElementById('rd');
// const rdError=document.getElementById('rdErr');

// if(urd.value==''){
//     rdError.innerHTML='Put correct registrationdate';
//     rdError.style.color='Red';
//     return false;
//     //urd.focus();
// } 


// const uha=document.getElementById('ha');
// const haError=document.getElementById('haErr');

// if(uha.value==''){
//     haError.innerHTML='Put correct home address';
//     haError.style.color='Red';
//     return false;
//     //uha.focus();
// }

// const ucon=document.getElementById('con');
// const conError=document.getElementById('conErr');

// if(ucon.value==''){
//  conError.innerHTML='Put correct registrationdate';
//  conError.style.color='Red';
//  return false;
//  //ucon.focus();
// }

// const upass=document.getElementById('pass');
// const passError=document.getElementById('passErr');

// if(upass.value==''){
//  passError.innerHTML='Put a correct password please';
//  passError.style.color='Red';
//  return false;
//  //upass.focus();
// }



// return (true);
// }


      

   


