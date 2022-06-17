let genNum = Math.floor((Math.random()*100)+1);

console.log(genNum);

let text    = document.getElementById("text");
let counter = document.getElementById("counter");
let start   = document.getElementById("start");
let form    = document.getElementById("input");
let finish  = document.getElementById("finish");

let btnStart  = document.getElementById("buttonStart"); 
let btnForm     = document.getElementById("buttonForm");
let btnFinish = document.getElementById("buttonFinish");
let number    = document.getElementById("number");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");



btnStart.addEventListener('click',function(){
   
start.classList.toggle('uno');

form.classList.toggle('dos');

})
let contador = [];
btnForm.addEventListener("click",function(){ 

    let numIn = 0;
    
        if (number.value ==="" || number.value>100 ||number.value<1) {
            h2.textContent = "Ingrese el numero de vuelta."
        }
            else if (genNum>number.value) {
                numIn = number.value;
                   contador.push(number.value);
                   h2.textContent = `Es mayor y te quedan ${10 - contador.length} intetos.`;
                   if (contador.length < 2) {
                    h3.textContent = `El numero ingresado es ${contador}`
                } else {
                    h3.textContent = `Los numeros ingresados son ${contador}`    
                }
            }
                else if (genNum<number.value) {
                    numIn = number.value;
                    contador.push(number.value);
                    h2.textContent = `Es menor y  te quedan ${10 - contador.length} intentos.`;
                    if (contador.length < 2) {
                        h3.textContent = `El numero ingresado es ${contador}`
                    } else {
                        h3.textContent = `Los numeros ingresados son ${contador}`    
                    }
                    
                }
                    else if (genNum == number.value) {
                         h2.textContent = `¡Felicitaciones!. Ganaste.`;
                         h3.textContent = `El numero era ${number.value}.`;
                         form.classList.toggle('dos');
                         finish.classList.toggle('dos');
                    }
    
            
    if(contador.length === 10) {
        h2.textContent = `Perdiste. Vuelve a intentar.`;
        h3.textContent = "";
        form.classList.toggle('dos');
        finish.classList.toggle('dos');
    }
                
})


