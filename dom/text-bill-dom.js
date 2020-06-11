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

var textInstance = calculateTextBill();


//add an event listener for when the add button is pressed
function textBillTotal(){
  
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value;
    
    // update the correct total
    if (billTypeEntered === "call"){
        textInstance.enterCall();
    }
    else if (billTypeEntered === "sms"){
        textInstance.enterSms();
    }
    
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = textInstance.getTextTotalCall().toFixed(2);
    smsTotalElem.innerHTML = textInstance.getTextTotalSms().toFixed(2);
    totalCostElem.innerHTML = textInstance.getTextTotal().toFixed(2);
    textBillTotalColor();
};

function textBillTotalColor()  {


    totalCostElem.classList.remove("critical");
    totalCostElem.classList.remove("warning");
    totalCostElem.classList.add(textInstance.textTotalClassName());

}
 textTotalAddBtn.addEventListener("click",textBillTotal);
