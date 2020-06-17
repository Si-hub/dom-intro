//get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
 const billTotalElement = document.querySelector(".billTotal");
 //get a reference to the billString
 const billStringTotalElement = document.querySelector(".billString");

const billTotalSpanElement = document.querySelector(".total");


var calculateInstance = calculateBillEvent(billString)

function totalPhoneBill() {

        if (billItem === "call"){
            calculateInstance.enteredCall();
        }
        else if (billItem === "sms"){
            calculateInstance.enteredSms();
        }
    }
    
 
function styleTotalColor()  {


billTotalSpanElement.classList.remove("danger");
billTotalSpanElement.classList.remove("warning");
billTotalSpanElement.classList.add(calculateInstance.calculateTotalClassName());

};

function calculateBtnClicked () {
var billString = billStringTotalElement.value;


billTotalElement.innerHTML = calculateInstance.getCalculateTotal().toFixed(2);

    //billTotalElement.innerHTML = roundedBillTotal;

};

//link the function to a click event on the calculate button
calculateBtn.addEventListener("click", calculateBtnClicked);



