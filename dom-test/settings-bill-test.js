//step 1: tests to set the prices
describe("The bill with settings factory function", function(){
    it("should be able to set the call cost" , function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(10);
        settingsBill.setCallCost(1.85);
        assert.equal(1.85, settingsBill.getCallCost());

        let settingsBill2 = BillWithSettings();
        
        settingsBill2.setCallCost(2.75);
        assert.equal(2.75, settingsBill2.getCallCost());

    });

    it("should be able to set the sms cost" , function(){
        let settingsBill = BillWithSettings();

        settingsBill.setSmsCost(0.85);
        assert.equal(0.85, settingsBill.getSmsCost());

        let settingsBill2 = BillWithSettings();
        
        settingsBill2.setSmsCost(0.75); 
        assert.equal(0.75, settingsBill2.getSmsCost());
    });

    it("should be able to set the sms and call cost" , function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.75);
        settingsBill.setSmsCost(0.75);

        assert.equal(2.75, settingsBill.getCallCost());
        assert.equal(0.75, settingsBill.getSmsCost());

        let settingsBill2 = BillWithSettings();

        settingsBill.setCallCost(1.75);
        settingsBill.setSmsCost(0.85);

        assert.equal(1.75, settingsBill.getCallCost());
        assert.equal(0.85, settingsBill.getSmsCost());

    });

    it("should be able to set the warning level" , function(){
        let settingsBill = BillWithSettings();

        settingsBill.setWarningLevel(30.00);
        assert.equal(30.00, settingsBill.getWarningLevel());

    });

    it("should be able to set the critical level" , function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(50.00);
        assert.equal(50.00, settingsBill.getCriticalLevel());

    });

    it("should be able to set the warning and critical level" , function(){
        let settingsBill = BillWithSettings();

        settingsBill.setWarningLevel(30.00);
        settingsBill.setCriticalLevel(50.00);

        assert.equal(30.00, settingsBill.getWarningLevel());
        assert.equal(50.00, settingsBill.getCriticalLevel());


    });

//step 2: tests to use the values set inside the factory function
    
describe("Use values", function(){

    it("should be able to use the call cost set" , function(){

        let settingsBill = BillWithSettings();

        
        settingsBill.setCriticalLevel(10);
        settingsBill.setCallCost(2.75);
        settingsBill.setSmsCost(0.75);
        
        assert.equal(2.75, settingsBill.getCallCost());
        assert.equal(0.75, settingsBill.getSmsCost());

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

       assert.equal(8.25, settingsBill.getTotalCost());
       assert.equal(8.25, settingsBill.getTotalCallCost());
       assert.equal(0.00, settingsBill.getTotalSmsCost());

    });

    it("should be able to make 2 calls at 1.35 each" , function(){

        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(10);
        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.75);

        assert.equal(1.35, settingsBill.getCallCost());
        assert.equal(0.75, settingsBill.getSmsCost());

        settingsBill.makeCall();
        settingsBill.makeCall();

       assert.equal(2.70, settingsBill.getTotalCost());
       assert.equal(2.70, settingsBill.getTotalCallCost());
       assert.equal(0.00, settingsBill.getTotalSmsCost());

    });

    it("should be able to send 2 sms's at 0.85 each" , function(){

        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(10);
        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.85);

        //why we dont have get. on sms's?

        settingsBill.sendSms();
        settingsBill.sendSms();

       assert.equal(1.70, settingsBill.getTotalCost());
       assert.equal(0.00, settingsBill.getTotalCallCost());
       assert.equal(1.70, settingsBill.getTotalSmsCost());

    });

    it("should be able to send 2 sms's at 0.85 each & make a 1 call at 1.35" , function(){

        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(10);
        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.85);


        settingsBill.sendSms();
        settingsBill.sendSms();
        settingsBill.makeCall();

       assert.equal(3.05, settingsBill.getTotalCost());
       assert.equal(1.35, settingsBill.getTotalCallCost());
       assert.equal(1.70, settingsBill.getTotalSmsCost());

    });
});

//step 3: test to use the critical and warning level values and add test to test critical/warning

describe("Warning & Critical level", function(){

    it("should return a class name of 'warning' if warning level is reached", function (){

            let settingsBill = BillWithSettings();

            settingsBill.setCallCost(1.35);
            settingsBill.setSmsCost(0.85);
            settingsBill.setWarningLevel(5);
            settingsBill.setCriticalLevel(10);

            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();

            assert.equal("warning", settingsBill.totalClassName());
    })

    it("should return a class name of 'critical' if critical level has been reached", function (){

        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.50);
        settingsBill.setSmsCost(0.85);
        settingsBill.setCriticalLevel(10);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal("critical", settingsBill.totalClassName());
})
//step 4: test to stop the total cost from increasing when its reached critical level

it("should return stop the Total Cost from increasing when the critical level has been reached", function (){

    let settingsBill = BillWithSettings();

    settingsBill.setCallCost(2.50);
    settingsBill.setSmsCost(0.85);
    settingsBill.setCriticalLevel(10);

    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();

    assert.equal("critical", settingsBill.totalClassName());
    assert.equal(10, settingsBill.getTotalCallCost());

})
    });
});

