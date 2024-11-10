let display = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let buttonsArray = Array.from(buttons);
let string = '';

buttonsArray.forEach(btn =>{
    btn.addEventListener("click",(e) => {
        if(e.target.innerHTML == "DEL"){
            string=string.substring(0,string.length-1);
            display.value = string;
        }
        else if(e.target.innerHTML == "AC"){
            string="";
            display.value = string;
        }
        else if (buttonText === "=") {
            try {
                string = eval(string).toString(); // Eval expression and convert to string
                display.value = string;
            } catch (error) {
                display.value = "Error"; 
                string = ""; /
            }
        }
        else {
            string += buttonText;
            display.value = string;
        }
    })
})