function selectBar(clickedBar){
    console.log("jeg har trykket på en stolpe", clickedBar)

    if(chosenBar == clickedBar){
        chosenBar = undefined;
        disabledorNot = 'disabled'
    }
    else{
        chosenBar = clickedBar;
        disabledorNot = "";
    }
    chosenBar = clickedBar;
    show();
}

function removeStolpe(){
    numbers.splice(chosenBar -1, 1);
    show();
}

function changeStolpe(){
    if(inputValue < 1 || inputValue > 10){
        alert('Verdien må være mellom 1 og 10');
    }
    else {numbers[chosenBar -1] = inputValue;
    }
    show();
}

function addStolpe(){
    if(inputValue < 1 || inputValue > 10){
        alert('Verdien må være mellom 1 og 10');
    }
    else{numbers.push(inputValue);
    }
    show();
}
