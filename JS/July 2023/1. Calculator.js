
/*
let display = document.getElementById('display');
let displayValue = '';
buttons = document.querySelectorAll('button')

for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        alert(buttonText)
        console.log(buttonText)
        if(buttonText == 'X') {
            buttonText="*";
            displayValue +=buttonText;
            display.value = displayValue;
        } else if(buttonText == 'C') {
            displayValue = '';
            display.value = displayValue;
        } else if(buttonText == '=') {
            display.value = eval(displayValue)
        } else {
            displayValue += buttonText;
            display.value = displayValue
        }
    }) 
}
*/

function displayValue(value){
    if (document.getElementById('display').length = 0 || 
        document.getElementById('display').length == null || 
        document.getElementById('display').length == undefined) {
        console.log("Nothing there");
        document.getElementById('display').value = value;
    } else {
        console.log("Something is already there");
        document.getElementById('display').value = document.getElementById('display').value + value;
    }
    

}

function abc(){document.getElementById('display').style.backgroundColor = 'lightblue'}
function def(){document.getElementById('display').style.backgroundColor = 'lightgreen'}
function choose_color(value){
    document.getElementById("my_page").style.backgroundColor = value;
}