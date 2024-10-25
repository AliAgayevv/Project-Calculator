const display = document.getElementById("display");
const clearScreen = document.getElementById("clearScreen");
const numberButtons = document.querySelectorAll(".numberBtn");

display.innerHTML = "0";

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
    lengthOfText = display.innerHTML.length;
    textWithoutLastElement = display.innerHTML.slice(0, lengthOfText - 1);
    display.innerText = textWithoutLastElement;
    if(lengthOfText === 1)
    {
        display.innerHTML = "0";
    }
})

// ! For hold, all elements clear from display screen, i will add this section at the end.

// clearScreen.addEventListener('mousedown', () => {
//     alert("hello")
// })

