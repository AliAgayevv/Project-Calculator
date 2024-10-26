const display = document.getElementById("display");
const clearScreen = document.getElementById("clearScreen");
const numberButtons = document.querySelectorAll(".numberBtn");
const functionButtons = document.querySelectorAll(".functionBtn");
const showAnswer = document.getElementById("showAnswer");



display.innerHTML = "0";


// Global variables
// If user click operator, cant add second operator.
var existOperator = false;

var numberOne;
var numberTwo;

var operator;
var answer;
var answerIsExist;


// Function buttons 
functionButtons.forEach((funcBtn) => {
    funcBtn.addEventListener('click', () => {
        // Some function button like "rand" and "+/-" cannot add the screen, i make a logic for this case. 
        if(existOperator === false && funcBtn.innerHTML !== "Rand" && funcBtn.innerHTML !== "+/-" )
        {
            operator = funcBtn.innerText;
            // it is a basic flag for check a operator exist on the screen or not.
            existOperator = true;
            numberOne = Number(display.innerHTML);

            display.innerHTML = `${numberOne}${funcBtn.innerHTML}`
            if(funcBtn.innerHTML === "=") 
                {
                    // for catch numberTwo, use String method slice, and first argument (in other word begin of slice) is length numberOne + 1 because we have a operator between numberOne and numberTwo
                    numberTwo = display.innerHTML.slice(String(numberOne).length + 1, display.innerHTML.length);
                }
        }
        else
        {
            if(funcBtn.innerHTML === "+/-")
            {
                let numberOnTheScreen = Number(display.innerHTML);
                display.innerHTML = numberOnTheScreen * (-1);
            }
        }
    })
})

showAnswer.addEventListener('click', () => {
    // for catch numberTwo, use String method slice, and first argument (in other word begin of slice) is length numberOne + 1 because we have a operator between numberOne and numberTwo
    numberTwo = Number(display.innerHTML.slice(String(numberOne).length + 1, display.innerHTML.length));
    // basic switch case structure for variable "operator"
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

        case "%":
            answer = numberOne % numberTwo;
            break;


        default:
            break;
    }

// Some special cases
    if(numberTwo === 0 && numberOne === 0 && operator === "÷")
    {
        answer = "Indeterminate";
    }
    else if(numberTwo === 0 && operator === "÷")
    {
        answer = "Divide by zero ";
    }

    // When page is opened, user click "=" and answer on the screen be "undefined" for fix, i used basic logic.
    else if(answer === undefined)
    {
        answer = 0;
    }

    display.innerHTML = answer;
    // I use this variable on the addeventListener for the clickScreen
    
    existOperator = false;
    answerIsExist = true;
})

// Add number to display
numberButtons.forEach((buttons) => 
{
    buttons.addEventListener('click', () => {
        // Number on the answer section is break the border, for solve i add max length, program check dispaly length and if length bigger than 15, then dont add new numbers.
        if(display.innerHTML.length < 15)
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

