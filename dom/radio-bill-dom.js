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

var radioInstance = calculateRadioBill();


function radioBillTotal(){
//in the event listener get the value from the billItemTypeRadio radio buttons
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value

    // billItemType will be 'call' or 'sms'
    if (billItemType === "call"){
       radioInstance.checkCall();
    }
    else if (billItemType === "sms"){
        radioInstance.checkSms();
    }
    //update the totals that is displayed on the screen.
    callsTotalElement.innerHTML = radioInstance.getRadioTotalCallCost().toFixed(2);
    smsTotalElement.innerHTML = radioInstance.getRadioTotalSmsCost().toFixed(2);
    totalCostElement.innerHTML = radioInstance.getRadioTotalCost().toFixed(2);
    //radioBillTotalColor(totalCost);
}

    //color the total based on the criteria
    totalCostElement.classList.remove("critical");
    totalCostElement.classList.remove("warning");
    totalCostElement.classList.add(radioInstance.radioTotalClassName());

};
AddBtn.addEventListener("click",radioBillTotal);
