
//get a reference to the sms or call radio buttons
const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields
const callsTotalSettings = document.querySelector(".callTotalSettings");
const smsTotalSettings = document.querySelector(".smsTotalSettings"); 
const totalCostSettings = document.querySelector(".totalSettings");
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
var callsTotal = 0;
var smsTotal = 0;
var totalBill = 0;
//create variables that will keep track of all the settings total
var callsCostSetting = 0;
var smsCostSetting = 0;
var warningLevelSetting = 0;
var criticalLevelSetting = 0;
//add an event listener for when the 'Update settings' button is pressed
updateBtn.addEventListener("click",settingsUpdate);

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
 if (totalBill < criticalLevelSetting){
   //in the event listener get the value from the billItemTypeRadio radio buttons
var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
if (checkedRadioBtn){
    var billItemTypeWithSettings = checkedRadioBtn.value;
    //console.log(billItemTypeWithSettings);

    if (billItemTypeWithSettings = "call"){
        callsTotal += callsCostSetting;
    }
    else if (billItemTypeWithSettings = "sms"){
        smsTotal +=smsCostSetting;
    }

   // display the latest totals on screen
  callsTotalSettings.innerHTML = callsTotal.toFixed(2);
  smsTotalSettings.innerHTML = smsTotal.toFixed(2);
  totalBill = callsTotal + smsTotal;
  totalCostSettings.innerHTML = totalBill.toFixed(2);
   settingsColor();
  
  }
 }
}
    function settingsColor (){
      
      totalCostSettings.classList.remove("warning");
     totalCostSettings.classList.remove("danger");
  
     //color the total based on the criteria
     if (totalBill >= criticalLevelSetting){
         // adding the danger class will make the text red
         totalCostSettings.classList.add("danger");
     }
     else if (totalBill >= warningLevelSetting){
         totalCostSettings.classList.add("warning");
       
     }  
     
};addBtnPrimary.addEventListener("click",radioBillSettingTotal);