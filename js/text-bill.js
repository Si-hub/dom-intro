// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText");
//get a reference to the add button
const textTotalAddBtn = document.querySelector(".addToBillBtn");
// get reference to the call total
const callsTotalElem = document.querySelector(".callTotalOne");
// get reference to the sms total
const smsTotalElem = document.querySelector(".smsTotalOne");
// get reference to the overall total
const totalCostElem = document.querySelector(".totalOne");
//create a variable that will keep track of the total bill
var callsTotal = 0;
var smsTotal = 0;
//add an event listener for when the add button is pressed
function textBillTotal(){
  
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value;
    
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);
    textBillTotalColor(totalCost);
};

function textBillTotalColor(totalCost)  {


    totalCostElem.classList.remove("danger");
    totalCostElem.classList.remove("warning");

    //color the total based on the criteria
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }
}
 textTotalAddBtn.addEventListener("click",textBillTotal);
