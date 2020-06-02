function calculateRadioBill(){

    var callCheckCost = 0;
    var smsCheckedCost = 0;
    var warningLevelChecked = 0;
    var criticalLevelChecked = 0;

    var radioCallTotal = 0;
    var radioSmsTotal = 0;

    function setRadioCallCost (callCosts) {
        callCheckCost = callCosts;
       
    }
    
    function getRadioCallCost(){
    
        return callCheckCost;
    }
    
    function setRadioSmsCost (smsCosts) {
        smsCheckedCost = smsCosts;
       
    }
    
    function getRadioSmsCost(){
    
        return smsCheckedCost;
    }
    
    function setRadioWarningLevel(radioWarningLevel){
        warningLevelChecked = radioWarningLevel;
    }
    
    function getRadioWarningLevel(){
        
        return warningLevelChecked;
    }
    
    function setRadioCriticalLevel(radioCriticalLevel){
            criticalLevelChecked = radioCriticalLevel;
    }
        
    function getRadioCriticalLevel(){
            
        return criticalLevelChecked;
    }

    function checkCall (){

        if (!reachedCriticalLevel()) {
        radioCallTotal += callCheckCost;
        }
        
    }
    
    function getRadioTotalCost (){
        return radioCallTotal + radioSmsTotal;
    }
    
    function getRadioTotalCallCost(){
        return radioCallTotal;
    }
    
    function getRadioTotalSmsCost(){
        return radioSmsTotal;
    }
    
    function checkSms(){
    
        if (!reachedCriticalLevel()) {
        radioSmsTotal += smsCheckedCost;
        }
        
    }
    
    function reachedCriticalLevel (){
        return getRadioTotalCost() >= getRadioCriticalLevel()
    
    }
    
    function radioTotalClassName (){
    
        if (reachedCriticalLevel){
            return "critical"
        }
        if (getRadioTotalCost() >= getRadioWarningLevel()){
            return "warning"
        }
    }
        
        return {

        setRadioCallCost,
        getRadioCallCost,
        setRadioSmsCost,
        getRadioSmsCost,
        setRadioWarningLevel,
        getRadioWarningLevel,
        setRadioCriticalLevel,
        getRadioCriticalLevel,
        checkCall,
        getRadioTotalCost,
        getRadioTotalCallCost,
        getRadioTotalSmsCost,
        checkSms,
        reachedCriticalLevel,
        radioTotalClassName

        }
};