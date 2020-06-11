function calculateTextBill(){

    var theeCallCost = 2.75;
    var theeSmsCost = 0.75;
    var textWarningLevel = 30;
    var textCriticalLevel = 50;

    var callTotal = 0;
    var smsTotal = 0;

    function setCallCost(callCost) {
        theeCallCost = callCost;
       
    }
    
    function getCallCost(){
    
        return theeCallCost;
    }

    function setSmsCost(smsCost) {
        theeSmsCost = smsCost;
       
    }
    
    function getSmsCost(){
    
        return theeSmsCost;
    }

    function setTextWarningLevel(warningLevel) {
        textWarningLevel = warningLevel;
       
    }
    
    function getTextWarningLevel(){
    
        return textWarningLevel;
    }

    function setTextCriticalLevel(criticalLevel) {
        textCriticalLevel = criticalLevel;
       
    }
    
    function getTextCriticalLevel(){
    
        return textCriticalLevel;
    }

    function enterCall(){

        callTotal += theeCallCost;
        
    }
    
    function getTextTotal(){
        return callTotal + smsTotal;
    }
    
    function getTextTotalCall(){
        return callTotal;
    }
    
    function getTextTotalSms(){
        return smsTotal;
    }
    
    function enterSms(){
    
        smsTotal += theeSmsCost;
          
    }


    function textTotalClassName(){
    
        if (getTextTotal() >= getTextCriticalLevel()){
            return "critical"
        }
        if (getTextTotal() >= getTextWarningLevel()){
            return "warning"
        }
    }
    return{
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setTextWarningLevel,
        getTextWarningLevel,
        setTextCriticalLevel,
        getTextCriticalLevel,
        enterCall,
        getTextTotal,
        getTextTotalCall,
        getTextTotalSms,
        enterSms,
        textTotalClassName,

    };
};