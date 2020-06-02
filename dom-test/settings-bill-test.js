//step 1: tests to set the prices
describe("The bill with settings factory function", function(){
    it("should be able to set the call cost" , function(){

        let settingsBill = BillWithSettings();
        
        settingsBill.setCallCost(2.75);
        assert.equal(2.75, settingsBill.getCallCost());

    });

    it("should be able to set the sms cost" , function(){

        let settingsBill = BillWithSettings();

        settingsBill.setSmsCost(0.75);
        assert.equal(0.75, settingsBill.getSmsCost());

    });

    it("should be able to set the sms and call cost" , function(){

        let settingsBill = BillWithSettings();


        settingsBill.setCallCost(2.75);
        settingsBill.setSmsCost(0.75);

        assert.equal(2.75, settingsBill.getCallCost());
        assert.equal(0.75, settingsBill.getSmsCost());

    });

    it("should be able to set the warning level" , function(){

        let settingsBill = BillWithSettings();

        settingsBill.setWarningLevel(5);
        assert.equal(5, settingsBill.getWarningLevel());

    });

    it("should be able to set the critical level" , function(){

        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(10);
        assert.equal(10, settingsBill.getCriticalLevel());

    });

    it("should be able to set the warning and critical level" , function(){

        let settingsBill = BillWithSettings();

        settingsBill.setWarningLevel(5);
        settingsBill.setCriticalLevel(10);

        assert.equal(5, settingsBill.getWarningLevel());
        assert.equal(10, settingsBill.getCriticalLevel());


    });
});

//step 2: tests to use the values set inside the factory function
    
describe("Use values", function(){

    it("should be able to use the call cost set" , function(){

        let settingsBill = BillWithSettings();

        
        settingsBill.setCriticalLevel(10);
        settingsBill.setCallCost(2.75);
        settingsBill.setSmsCost(0.85);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(8.25, settingsBill.getTotalCost());
        
    });

    it("should be able to make 2 calls at 1.35 each" , function(){

        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(10);
        settingsBill.setCallCost(1.35);

        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(2.70, settingsBill.getTotalCost());
        assert.equal(0.00, settingsBill.getTotalSmsCost());
        assert.equal(2.70, settingsBill.getTotalCallCost());
    });

    it("should be able to send 2 sms's at 0.85 each" , function(){

        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(10);
        settingsBill.setSmsCost(0.85);

        settingsBill.sendSms();
        settingsBill.sendSms();

        assert.equal(1.70, settingsBill.getTotalCost());
        assert.equal(1.70, settingsBill.getTotalSmsCost());
        assert.equal(0.00, settingsBill.getTotalCallCost());
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
        assert.equal(1.70, settingsBill.getTotalSmsCost());
        assert.equal(1.35, settingsBill.getTotalCallCost());

    });
});

//step 3: test to use the critical and warning level values and add test to test critical/warning

describe("Warning & Critical level", function(){

    it("should return a class name of 'warning' if warning level is reached", function (){

            let settingsBill = BillWithSettings();

            settingsBill.setCallCost(2.00);
            settingsBill.setSmsCost(0.85);
            settingsBill.setWarningLevel(5);
            settingsBill.setCriticalLevel(10);

            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            
            assert.equal("warning", settingsBill.totalClassName());
            assert.equal(6.00, settingsBill.getTotalCost());
    });

    it("should return a class name of 'critical' if critical level has been reached", function (){

        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.00);
        settingsBill.setSmsCost(0.85);
        settingsBill.setCriticalLevel(10);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal("critical", settingsBill.totalClassName());
        assert.equal(10.00, settingsBill.getTotalCost());
})
//step 4: test to stop the total cost from increasing when its reached critical level

it("should return stop the Total Cost from increasing when the critical level has been reached", function (){

    let settingsBill = BillWithSettings();

    settingsBill.setCallCost(2.00);
    settingsBill.setSmsCost(1.75);
    settingsBill.setCriticalLevel(10);

    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.sendSms();

    assert.equal("critical", settingsBill.totalClassName());
    assert.equal(10.00, settingsBill.getTotalCallCost());

})
});


