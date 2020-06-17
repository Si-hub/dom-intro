function calculateBillEvent(){

    var calculateCallCost = 2.75;
    var calculateSmsCost = 0.75;
    var calculateWarningLevel = 30;
    var calculateCriticalLevel = 50;

    var callCostTotal = 0;
    var smsCostTotal = 0;

    function setCallCost(callCost) {
        calculateCallCost = callCost;
       
    }
    
    function getCallCost(){
    
        return calculateCallCost;
    }

    function setSmsCost(smsCost) {
        calculateSmsCost = smsCost;
       
    }
    
    function getSmsCost(){
    
        return calculateSmsCost;
    }

    function setCalcWarningLevel(warningLevel) {
        calculateWarningLevel = warningLevel;
       
    }
    
    function getCalcWarningLevel(){
    
        return calculateWarningLevel;
    }

    function setCalcCriticalLevel(criticalLevel) {
        calculateCriticalLevel = criticalLevel;
       
    }
    
    function getCalcCriticalLevel(){
    
        return calculateCriticalLevel;
    }

    function enteredCall(){

        callCostTotal += calculateCallCost;
        
    }
    
    function getCalculateTotal(){
        return callCostTotal + smsCostTotal;
    }
    
    function getTotalCall(){
        return callCostTotal;
    }
    
    function getTotalSms(){
        return smsCostTotal;
    }
    
    function enteredSms(){
    
        smsCostTotal += calculateSmsCost;
          
    }

    function calculateTotalClassName(){
    
        if (getCalculateTotal() >= getCalcCriticalLevel()){
            return "danger"
        }
        if (getCalculateTotal() >= getCalcWarningLevel()){
            return "warning"
        }
    }

return{
    setCallCost,
    getCallCost,
    setSmsCost,
    getSmsCost,
    setCalcWarningLevel,
    getCalcWarningLevel,
    setCalcCriticalLevel,
    getCalcCriticalLevel,
    enteredCall,
    enteredSms,
    getCalculateTotal,
    getTotalCall,
    getTotalSms,
    calculateTotalClassName,
}

};