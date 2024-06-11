let display = document.getElementById('display');

function clearScreen() {
    display.value = '';
}

function appendToDisplay(value) {
    display.value += value
}

function calculate(){
    try {
        display.value = eval(display.value)
    } catch (error) {
        clearScreen()
        display.value += display.value +'Error'
    }
    
}