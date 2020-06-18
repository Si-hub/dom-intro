function totalPhoneBill(billString) {


    //split the string
        var billItems = billString.split(",");
        //loop over all the bill items
        var billTotal = 0;

        for (var i=0;i<billItems.length;i++){
            var billItem = billItems[i].trim();
            if (billItem === "call"){
                billTotal += 2.75;
            }
            else if (billItem === "sms"){
                billTotal += 0.75;
            }
        }
       
    return billTotal.toFixed(2);
    
    }