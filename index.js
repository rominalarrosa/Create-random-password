

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password2= document.getElementById("password-Two");
let password1 = document.getElementById("password-One");
let pwlength= document.getElementById("quantity")



function generatepassword(){
    let quantity= Number(pwlength.value)
    password1.textContent="";
    password2.textContent="";
    for (i= 0 ; i< quantity; i++){
        let numrandom = 7
        password1.textContent+= characters[Math.floor(Math.random()*characters.length)]
        password2.textContent+= characters[Math.floor(Math.random()*characters.length)]
    } 
}


