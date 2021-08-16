var scrollDown = document.querySelector("#scroll-down");
var inputDate = document.querySelector("#input-date");
var inputNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#button");
var displayMessage = document.querySelector("#display-message")
var crossBtn = document.querySelector(".cross");

scrollDown.addEventListener("click", scrollWin);
checkButton.addEventListener("click", clickEventHandler);
crossBtn.addEventListener("click", crossClickHandler);

function crossClickHandler(){
    document.querySelector(".second-first").style.display = "none";
}

var numberToCheck = inputNumber.value;

function scrollWin() {
    window.scrollTo(0, 660);
}

function checkBirthdayIsLucky(){
    var dateString = inputDate.value.replaceAll("-","");
    var result = getSum(dateString);
    if(result % inputNumber.value == 0){
        document.getElementById("display-message").innerHTML = "CONGRATS! Your birthday is lucky🎉"; 
    }
    else{
    displayMessage.innerHTML = "SORRY! your birthday is not lucky😞";
    }
}

function getSum(dateString)
{
    var sum=0;
    for(let i = 0;i<dateString.length;i++){
    sum = sum + Number(dateString.charAt(i))
    }
return sum;
}



function clickEventHandler(){
    checkBirthdayIsLucky();
}