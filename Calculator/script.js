let display = document.getElementById("inputbox");
let buttons = document.querySelectorAll('button');
let string = '';
let buttonArray = Array.from(buttons);
buttonArray.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if(e.target.innerHTML == 'DE')
        {
            string = string.toString().slice(0,-1)
        }
        else if(e.target.innerHTML == 'AC')
        {
            string = '';
        }
        else if(e.target.innerHTML == '=')
        {
            string = eval(display.value)
        }
        else{
            string += e.target.innerHTML;
        }
        display.value = string;
    })
})
