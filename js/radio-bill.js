// get a reference to the sms or call radio buttons
const billItemTypes = document.querySelector(".billItemTypeRadio");

//get a reference to the add button
const AddBtn = document.querySelector(".radioBillAddBtn");
//get a reference to the call totals
const callsTotalElement = document.querySelector(".callTotalTwo");
//get a reference to the sms totals
const smsTotalElement = document.querySelector(".smsTotalTwo");
//get a reference of the overall total 
const totalCostElement = document.querySelector(".totalTwo");
//create a variable that will keep track of the total bill
var callsTotalone = 0;
var smsTotalone = 0;
//add an event listener for when the add button is pressed
function radioBillTotal(){
//in the event listener get the value from the billItemTypeRadio radio buttons
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value

    // billItemType will be 'call' or 'sms'
    if (billItemType === "call"){
        callsTotalone += 2.75
    }
    else if (billItemType === "sms"){
        smsTotalone += 0.75;
    }
    //update the totals that is displayed on the screen.
    callsTotalElement.innerHTML = callsTotalone.toFixed(2);
    smsTotalElement.innerHTML = smsTotalone.toFixed(2);
    var totalCost = callsTotalone + smsTotalone;
    totalCostElement.innerHTML = totalCost.toFixed(2);
    //radioBillTotalColor(totalCost);
}

    //color the total based on the criteria
    totalCostElem.classList.remove("danger");
    totalCostElem.classList.remove("warning");

    //color the total based on the criteria
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElement.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElement.classList.add("warning");
    }
};
AddBtn.addEventListener("click",radioBillTotal);
