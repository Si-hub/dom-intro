//get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
 const billTotalElement = document.querySelector(".billTotal");
 //get a reference to the billString
 const billStringTotalElement = document.querySelector(".billString");

const billTotalSpanElement = document.querySelector(".total");

function calculateBtnClicked () {

    var billString = billStringTotalElement.value;
    
     const roundedBillTotal = totalPhoneBill(billString);
     
    styleTotalColor(roundedBillTotal);
    
        billTotalElement.innerHTML = roundedBillTotal;
    
    };


function styleTotalColor(roundedBillTotal)  {

    const currentTotal = Number(roundedBillTotal);


billTotalSpanElement.classList.remove("danger");
billTotalSpanElement.classList.remove("warning");

//color the total based on the criteria
    if (totalPhoneBill(billString) >= 30){
        // adding the danger class will make the text red
       billTotalSpanElement.classList.add("danger");
    }
    else if (totalPhoneBill(billString) >= 20 && totalPhoneBill(billString) < 30){
       billTotalSpanElement.classList.add("warning");
    
} 

};

//link the function to a click event on the calculate button
calculateBtn.addEventListener("click", calculateBtnClicked);


