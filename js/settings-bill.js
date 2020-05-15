
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


// create a variables that will keep track of all three totals.
var totalCall = 0;
var totalSmes = 0;
var totalBills = 0;
//create variables that will keep track of all the settings total
var callsCostSetting = 0;
var smsCostSetting = 0;
var warningLevelSetting = 0;
var criticalLevelSetting = 0;

function settingsUpdate(){
  //these updated values should be referencing global variables to update
    //update the values for settings
  callsCostSetting = Number(callsCostSettingElement.value);
  smsCostSetting = Number(smsCostSettingElement.value);
  warningLevelSetting = Number(warningLevelSettingElement.value);
  criticalLevelSetting = Number(criticalLevelSettingElement.value);
  settingsColor();

}//add an event listener for when the add button is pressed
function radioBillSettingTotal(){
 if (totalBills < criticalLevelSetting){
   //in the event listener get the value from the billItemTypeRadio radio buttons
var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
if (checkedRadioBtn){
    var billItemTypeWithSettings = checkedRadioBtn.value;
    //console.log(billItemTypeWithSettings);
  
    if (billItemTypeWithSettings === "call"){
        totalCall += callsCostSetting;
    }
    else if (billItemTypeWithSettings === "sms"){
        totalSmes += smsCostSetting;
    }

   // display the latest totals on screen
  callsTotalSettingsElement.innerHTML = totalCall.toFixed(2);
  smsTotalSettingsElement.innerHTML = totalSmes.toFixed(2);
  totalBills = totalCall + totalSmes;
  totalCostSettingsElement.innerHTML = totalBills.toFixed(2);
   settingsColor();
  
  }
 }
}
    function settingsColor (){
      
      totalCostSettingsElement.classList.remove("warning");
      totalCostSettingsElement.classList.remove("danger");
  
     //color the total based on the criteria
     if (totalBills > criticalLevelSetting){
         // adding the danger class will make the text red
         totalCostSettingsElement.classList.add("danger");
     }
     else if (totalBills > warningLevelSetting){
         totalCostSettingsElement.classList.add("warning");
       
     }  
     
};
//add an event listener for when the 'Update settings' button is pressed
updateBtn.addEventListener("click",settingsUpdate);
addBtnPrimary.addEventListener("click",radioBillSettingTotal);