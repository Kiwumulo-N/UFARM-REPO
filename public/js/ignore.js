//Defining a function for displaying errors
function PrintError (elemnt,histng) {
    document.getElementById('elemnt').innerHTML='histng';
}
    

    //Retrieve/Accessing Html elements to be validated
function validate () {
    var uname=document.form.name.value;
    var uemail=document.form.email.value;
    var uphone=document.form.phone.value;
    var ucountry=document.form.country.value;
    var ugender=document.form.gender.value;
    var hobbies=[];
    var checkbox=document.getElementsByName('hobbies[]');
    for( var i=0; i < checkboxes.length ; i++ ) {
        if(checkboxes[i].checked){
            hobbies.push(checkboxes[i].value);
        }
    }

//Defining   error variables with a default name.
var  nameErr = emailErr = phoneErr = countryErr = genderErr=true;

//Validating the accessed elements
//Validating the name
if(uname==""){
    PrintError('nameErr', 'Field Required');
} else {
    var Regex1= /^[A-Za-z]+$/;
    if(Regex1.test(uname)===false) {
        PrintError('nameErr', 'Wrong name')
    } else {
        PrintError('nameErr' ,'')
        nameErr=false;
    }
}
//validating email
if(uemail==""){
    PrintError('emailErr', 'Field Required');
} else {
    var Regex2=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(Regex2.test(uemail)===false) {
        PrintError('emailErr', 'Wrong email')
    } else {
        PrintError('emailErr' ,'')
        emailErr=false;
    }
}

//validating mobile no
if(unphone==""){
    PrintError('phoneErr', 'Field Required');
} else {
    var Regex3=/^\d{10}$/ ;
    if(Regex3.test(uphone)===false) {
        PrintError('phoneErr', 'Wrong no')
    } else {
        PrintError('phoneErr' ,'')
        phoneErr=false;
    }

//alphanumeric    
    var Regex2=/^[0-9a-zA-Z]+$/;

    if (userPassword.value.match(Regex2)) {
       alert("correct password");
   
       
    } else {
        alert("wrong password");
        userPassword.style.border="3px solid red";
   


} 
//validating country
if(ucountry=="Select") {
    PrintError('countryErr','wrong country')

} else{
    PrintError('countryErr','')
    countryErr=false
}
//validate gender
if(ugener=="") {
    PrintError('genderErr','wrong country')

} else{
    PrintError('genderErr','')
    genderErr=false
}
// Prevent the form from being submitted if there are errors
if((nameErr|| emailErr||phoneErr ||countryErr||genderErr)=true){
    return false;
} else {
    //Creating a string from input data for preview
   var dataPreview = "You've entered the following details: \n" +
                     " Name: " + name + "\n" +
                     "Email : " + email + "\n" +
                     "Mobile Phone: " + mobile + "\n" +
                     "Country: " + country + "\n" +
                     "Gender: " + gender + "\n";
   if(hobbies.length) {
    dataPreview += "Hobbies: " + hobbies.join(", ");
   }
  // Display input data in a dialog box before submitting the form
   alert(dataPreview);
}



} 

}
