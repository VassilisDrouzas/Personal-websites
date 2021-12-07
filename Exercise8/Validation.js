let username=document.getElementById("Username");
let email=document.getElementById("Email");
let password=document.getElementById("Password");
let con_password=document.getElementById("ConfirmPassword");
let address=document.getElementById("Address");
let phone=document.getElementById("Phone");
let fname=document.getElementById("Name");
let lastname=document.getElementById('LastName');
let form=document.querySelector("form");

document.querySelector("button").addEventListener("click", (ev)=>{
    ev.preventDefault();
    Validate();
})

function Validate(){

    if (username.value.trim()=== ''){
        HandleError(username,"Το πεδίο username δεν μπορεί να είναι κενό.");
    }
    else{
        HandleSuccess(username);
    }

    if (email.value.trim()=== ''){
        HandleError(email, "Το πεδίο email δεν μπορεί να είναι κενό.");
    }
    else{
        if (!EmailisValid(email.value.trim())){
            HandleError(email, "Μη έγκυρη διεύθυνση email.");
        }
        else{
            HandleSuccess(email);
        }
    }
    if (password.value.trim()===''){
        HandleError(password, "Το πεδίο password δεν μπορεί να είναι κενό.");
    }
    else{
        HandleSuccess(password);
    }

    if(con_password.value.trim()=== ''){
        HandleError(con_password, "Το πεδίο επιβεβαίωσης κωδικού δε μπορεί να είναι κενό.");
    }
    else{
        if (password.value.trim()!== con_password.value.trim()){
            HandleError(con_password,"Τα πεδία κωδικού και επιβεβαίωσης δεν ταυτίζονται.");
        }
        else{
            HandleSuccess(con_password);
        }
    }

    if (address.value.trim()=== ''){
        HandleError(address,"Το πεδίο διεύθυνσης δεν μπορεί να είναι κενό.");
    }
    else{
        HandleSuccess(address);
    }

    if (phone.value.trim()=== ''){
        HandleError(phone,"Το πεδίο τηλεφώνου δεν μπορεί να είναι κενό.");
    }
    else{
        HandleSuccess(phone);
    }

    if (!phoneisValid(phone)){
        HandleError(phone, "Εισάγετε έναν έγκυρο αριθμό τηλεφώνου");
    }
    else{
        HandleSuccess(phone);
    }

    if (fname.value.trim()=== ''){
        HandleError(fname,"Το πεδίο ονόματος δεν μπορεί να είναι κενό.");
    }
    else{
        HandleSuccess(fname);
    }
    

    if (lastname.value.trim()=== ''){
        HandleError(lastname,"Το πεδίο επωνύμου δεν μπορεί να είναι κενό.");
    }
    else{
        HandleSuccess(lastname);
    }
   


}


function HandleSuccess(input){
    const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function HandleError(input,message){
    const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}


function EmailisValid(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function phoneisValid(phone){
    var phoneno=/^\d{10}$/;
    if (phone.value.match(phoneno)){
        return true;
    }
    else{
        return false;
    }
}



