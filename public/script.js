const display = document.getElementById("display");
const clearScreen = document.getElementById("clearScreen");
const numberButtons = document.querySelectorAll(".numberBtn");
const functionButtons = document.querySelectorAll(".functionBtn");
const showAnswer = document.getElementById("showAnswer");



display.innerHTML = "0";

var existOperator = false;
var numberOne;
var numberTwo;
var operator;

var answer;




functionButtons.forEach((funcBtn) => {
    funcBtn.addEventListener('click', () => {
        if(existOperator === false)
        {
            operator = funcBtn.innerText;
            existOperator = true;
             numberOne = Number(display.innerHTML);
            
            console.log("number 1: ", numberOne)
            console.log("operator: ", operator)
            display.innerHTML = `${display.innerHTML}${funcBtn.innerHTML}`
            if(funcBtn.innerHTML === "=") 
                {
                    numberTwo = display.innerHTML.slice(String(numberOne).length + 1, display.innerHTML.length);
                    alert(numberTwo);
                }
        }
    })
})

showAnswer.addEventListener('click', () => {
    numberTwo = Number(display.innerHTML.slice(String(numberOne).length + 1, display.innerHTML.length));
    switch (operator) {
        case "÷":
            answer = numberOne / numberTwo;
            break;
    
        case "×":
            answer = numberOne * numberTwo;
            break; 

        case "−":
            answer = numberOne - numberTwo;
            break;

        case "+":
            answer = numberOne + numberTwo;
            break;

        default:
            break;
    }
    display.innerHTML = answer;
    answerIsExist = true;
    existOperator = false;
})

// Add number to display
numberButtons.forEach((buttons) => 
{
    buttons.addEventListener('click', () => {
        // Number on the answer section is break the border, for solve i add max length, program check dispaly length and if length bigger than 10, then dont add new numbers.
        if(display.innerHTML.length < 10)
        {
            if(display.innerHTML !== "0")
                {
                    display.innerHTML = `${display.innerHTML}${buttons.innerHTML}`;
                    clearScreen.innerHTML = "DEL";
                }
                else
                {
                    display.innerHTML = buttons.innerHTML;
                }
        }
    })
});

// Delete number when DEL button is clicked
clearScreen.addEventListener('click', () => {
    if(!answerIsExist)
    {
        lengthOfText = display.innerHTML.length;
        textWithoutLastElement = display.innerHTML.slice(0, lengthOfText - 1);
        display.innerText = textWithoutLastElement;
        if(lengthOfText === 1 )
        {
            display.innerHTML = "0";
            clearScreen.innerHTML = "AC"
        }
    }
    else
    {
        display.innerHTML = "0";
        clearScreen.innerHTML= "AC";
    }
    
})

// ! Click with command (for the Windows user ctrl), all numbers delete and replace with 0
clearScreen.addEventListener('click', (event) => {
    if(event.ctrlKey || event.metaKey)
    {
        display.innerHTML = "0";
        clearScreen.innerHTML= "AC";
    }
})

