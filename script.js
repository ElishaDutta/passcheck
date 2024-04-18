let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");



// Showing input slider value 
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', ()=>{
    passBox.value = generatePassword();
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*"; 

// Function to generate Password
function generatePassword(){
    let genPassword = "";
    let allChars = "";

    allChars  += lowercase.checked ? lowerChars : "";
    allChars  += uppercase.checked ? upperChars : "";
    allChars  += numbers.checked ? allNumbers : "";
    allChars  += symbols.checked ? allSymbols : "";


    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }
    

    let i = 1;
    while(i<=inputSlider.value){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }

    return genPassword;
}

const password_checker=document.querySelector('.password-checker');
const password=document.querySelector('#password');
const progress_bar=document.querySelector('.bar');

password.onkeyup=()=>{
    //console.log(password.value);
    checkPasswordStrength(password.value);
}
function checkPasswordStrength(password){
    let strength=0;

    if(password.match(/(?=.*[A-Z])/))strength++;
    if(password.match(/(?=.*[a-z])/))strength++;
    if(password.match(/(?=.*[0-9])/))strength++;
    if(password.match(/(?=.*[`!@#$%^&*])/))strength++;
    if(password.match(/(?=.{9,})/))strength++;
    console.log(strength);
    switch(strength){
        case 0:
            password_checker.style.borderColor='transparent';
            progress_bar.style.cssText=`width:${(strength/5)*100}%;background-color:unset`;
        break;
        case 1:
            password_checker.style.borderColor='red';
            progress_bar.style.cssText=`width:${(strength/5)*100}%;background-color:red`;
        break;
        case 2:
            password_checker.style.borderColor='orangered';
            progress_bar.style.cssText=`width:${(strength/5)*100}%;background-color:orangered`;
        break;
        case 3:
            password_checker.style.borderColor='gold';
            progress_bar.style.cssText=`width:${(strength/5)*100}%;background-color:gold`;
        break;
        case 4:
            password_checker.style.borderColor='deepskyblue';
            progress_bar.style.cssText=`width:${(strength/5)*100}%;background-color:deepskyblue`;
        break;
        case 5:
            password_checker.style.borderColor='lime';
            progress_bar.style.cssText=`width:${(strength/5)*100}%;background-color:lime`;
        break;
    
}
}