

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let generatorEl = document.getElementById("generator")
let password1El = document.getElementById("p1")
let password2El = document.getElementById("p2")

generatorEl.addEventListener("click", function(){
    generator(characters)
})

function generator(chars){
    let password1 = ""
    let password2 = ""
    for(i=0; i<16; i++){
        password1 += chars[Math.floor(Math.random()*91)]
        password2 += chars[Math.floor(Math.random()*91)]}
    password1El.textContent = password1
    password2El.textContent = password2   
}

function copyTextToClipboard(textElement) {
    textElement.addEventListener('click', () => {
      const content = textElement.textContent;
      navigator.clipboard.writeText(content)
        .then(() => console.log(`Copied ${content} to clipboard`))
        .catch(err => console.error('Failed to copy: ', err));
        alert("Password copied to clipboard!")
    });
  }

copyTextToClipboard(password1El);
copyTextToClipboard(password2El);