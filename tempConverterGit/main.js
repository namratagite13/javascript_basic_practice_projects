


const displayTemp = document.getElementById("displayTemp");
const toFarhanheit = document.getElementById("toFahranheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");

let temp ;

function convert(){

    if(toFarhanheit.checked){
        temp = Number(displayTemp.value);
        temp = temp*1.8+32;
        result.textContent = temp;
    }
    else if(toCelcius.checked){
        temp = Number(displayTemp.value);
        temp = ((temp-32)/1.8)
        result.textContent = temp;

    }else{
        result.textContent = "select unit!!!"
    }
}