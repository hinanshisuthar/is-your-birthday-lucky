//referencing html elements
var scrollDown = document.querySelector("#scroll-down");
var inputDate = document.querySelector("#input-date");
var inputNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#button");
var displayMessage = document.querySelector("#display-message")
var crossBtn = document.querySelector(".cross");

//adding event listener to listen to a click event
scrollDown.addEventListener("click", scrollWin);
checkButton.addEventListener("click", clickEventHandler);
crossBtn.addEventListener("click", crossClickHandler);

function crossClickHandler(){ //privacy notice
    document.querySelector(".second-first").style.display = "none";
}

var numberToCheck = inputNumber.value; //value entered in input

function scrollWin() { //for scroll to a certain pixel
    window.scrollTo(0, 660);
}

function checkBirthdayIsLucky(){ 
    var dateString = inputDate.value.replaceAll("-",""); //convert date into a string
    var result = getSum(dateString); //sum is returned
    if(result % inputNumber.value == 0){ // %to check divisibility
        document.getElementById("display-message").innerHTML = "CONGRATS! Your birthday is lucky🎉"; 
    }
    else{
    displayMessage.innerHTML = "SORRY! your birthday is not lucky😞";
    }
}

function getSum(dateString)
{ //here order of the digits doesn't matter as they will be summed up
    var sum=0;
    for(let i = 0;i<dateString.length;i++){ //to iterate over the string
    sum = sum + Number(dateString.charAt(i)) //cal sum of digits in the string
    }
return sum; 
}



function clickEventHandler(){ 
    checkBirthdayIsLucky();
}