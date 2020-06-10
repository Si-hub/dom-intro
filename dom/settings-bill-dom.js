
//get a reference to the sms or call radio buttons
const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields
const callsTotalSettingsElement = document.querySelector(".callTotalSettings");
const smsTotalSettingsElement = document.querySelector(".smsTotalSettings"); 
const totalCostSettingsElement = document.querySelector(".totalSettings");
//get a reference to the add button
const addBtnPrimary = document.querySelector(".xbtn");
//get a reference to the 'Update settings' button
const updateBtn = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var callsCostSettingElement = document.querySelector(".callCostSetting");
var smsCostSettingElement = document.querySelector(".smsCostSetting");
var warningLevelSettingElement = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElement = document.querySelector(".criticalLevelSetting");

var settingsInstance = BillWithSettings();

function settingsUpdate(){

    //update the values for settings
    settingsInstance.setCallCost(Number(callsCostSettingElement.value));
    settingsInstance.setSmsCost(Number(smsCostSettingElement.value));
    settingsInstance.setWarningLevel(Number(warningLevelSettingElement.value));
    settingsInstance.setCriticalLevel(Number(criticalLevelSettingElement.value));
  settingsColor();

}

//add an event listener for when the add button is pressed

function radioBillSettingTotal(){
 
   //in the event listener get the value from the billItemTypeRadio radio buttons
var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
if (checkedRadioBtn){
    var billItemTypeWithSettings = checkedRadioBtn.value;
  
    if (billItemTypeWithSettings === "call"){
        settingsInstance.makeCall();
    }
    else if (billItemTypeWithSettings === "sms"){
        settingsInstance.sendSms();
    }

   // display the latest totals on screen
  callsTotalSettingsElement.innerHTML = settingsInstance.getTotalCallCost().toFixed(2);
  smsTotalSettingsElement.innerHTML = settingsInstance.getTotalSmsCost().toFixed(2);
  totalCostSettingsElement.innerHTML = settingsInstance.getTotalCost().toFixed(2);
   settingsColor();
  
  }
 }

    function settingsColor (){
      
      totalCostSettingsElement.classList.remove("warning");
      totalCostSettingsElement.classList.remove("critical");
      totalCostSettingsElement.classList.add(settingsInstance.totalClassName());
      
     
};
//add an event listener for when the 'Update settings' button is pressed
updateBtn.addEventListener("click",settingsUpdate);
addBtnPrimary.addEventListener("click",radioBillSettingTotal);