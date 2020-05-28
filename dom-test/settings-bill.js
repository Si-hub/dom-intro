function BillWithSettings(){
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    var callCostTotal = 0;
    var smsCostTotal = 0;

    function setCallCost(callCost){
        theCallCost = callCost;
    }

    function getCallCost(){

    return theCallCost;
}
function setSmsCost(smsCost){
    theSmsCost = smsCost;
}

function getSmsCost(){
    
return theSmsCost;
}

function setWarningLevel(warningLevel){
    theWarningLevel = warningLevel;
}

function getWarningLevel(){
    
return theWarningLevel;
}

function setCriticalLevel(criticalLevel){
    theCriticalLevel = criticalLevel;
}

function getCriticalLevel(){
    
return theCriticalLevel;
}

function makeCall (){

    if (!hasReachedCriticalLevel()) {
    callCostTotal += theCallCost;
    }
    
}

function getTotalCost (){
    return callCostTotal + smsCostTotal;
}

function getTotalCallCost(){
    return callCostTotal;
}

function getTotalSmsCost(){
    return smsCostTotal;
}

function sendSms(){

    if (!hasReachedCriticalLevel()) {
    smsCostTotal += theSmsCost;
    }
    
}

function hasReachedCriticalLevel (){
    return getTotalCost() >= getCriticalLevel()

}

function totalClassName (){

    if (hasReachedCriticalLevel){
        return "critical"
    }
    if (getTotalCost() >= getWarningLevel()){
        return "warning"
    }
}
    return {
        // 14 childs functions inside Parent function "BillWithSettings"
        setCallCost,
        getCallCost,
        setSmsCost, 
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        totalClassName,
    }
};

//Factory Function importance: 
// 1. makes things easy for you, when you are doing testing because you can just call only 
// the function you want
// 2. Factory function makes your code to be secured because someone who is outside can only 
// see the Parent function but not aware of the functions inside that function and even if
// he attempt to find out what is inside the function, he will struggle.  