


const display = document.getElementById("displayCalculation");

function append(input){
    display.value +=  input
}

function equal(){

    try{
        display.value = eval(display.value)
    }
    catch{
        display.value = "ERROR"
    }
}

function clearDisplay(){
    display.value = ""
}

function clearSteps(){
   
    let num = display.value;
    
    let arr = Array.from(Number(num))
    arr.pop()
}
