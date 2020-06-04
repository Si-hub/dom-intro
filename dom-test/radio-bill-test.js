describe("The radio button bill factory function", function(){

    it("should be able to set the call cost that is checked" , function(){

        var radioBill = calculateRadioBill();

        radioBill.setRadioCallCost(2.75);
        assert.equal(2.75, radioBill.getRadioCallCost());
    })



it("should be able to set the sms cost that is checked" , function(){

    var radioBill = calculateRadioBill();

    radioBill.setRadioSmsCost(0.75);
    assert.equal(0.75, radioBill.getRadioSmsCost());
});

it("should be able to set the call and sms cost that is checked" , function(){

    let radioBill = calculateRadioBill();


    radioBill.setRadioCallCost(2.75);
    radioBill.setRadioSmsCost(0.75);

    assert.equal(2.75, radioBill.getRadioCallCost());
    assert.equal(0.75, radioBill.getRadioSmsCost());

});

it("should be able to set the warning level" , function(){

    let radioBill = calculateRadioBill();

    radioBill.setRadioWarningLevel(5);
    assert.equal(5, radioBill.getRadioWarningLevel());

});

it("should be able to set the critical level" , function(){

    let radioBill = calculateRadioBill();

    radioBill.setRadioCriticalLevel(10);
    assert.equal(10, radioBill.getRadioCriticalLevel());

});


it("should be able to set the warning and critical level" , function(){

    let radioBill = calculateRadioBill();

    radioBill.setRadioWarningLevel(5);
    radioBill.setRadioCriticalLevel(10);

    assert.equal(5, radioBill.getRadioWarningLevel());
    assert.equal(10, radioBill.getRadioCriticalLevel());


});
});

//use the values 

describe("Use values", function(){

    it("should be able to use the call cost that is checked" , function(){

        let radioBill = calculateRadioBill();

        
        radioBill.setRadioCriticalLevel(10);
        radioBill.setRadioCallCost(2.75);
        radioBill.setRadioSmsCost(0.75);

        radioBill.checkCall();
        radioBill.checkCall();
        radioBill.checkCall();

        assert.equal(8.25, radioBill.getRadioTotalCost());
        assert.equal(0.00, radioBill.getRadioTotalSmsCost());
        assert.equal(8.25, radioBill.getRadioTotalCallCost());
    });

    it("should be able to return 3.50 if a user select call and sms" , function(){

        let radioBill = calculateRadioBill();

        
        radioBill.setRadioCriticalLevel(10);
        radioBill.setRadioCallCost(2.75);
        radioBill.setRadioSmsCost(0.75);

        radioBill.checkCall();
        radioBill.checkSms();

        assert.equal(3.50, radioBill.getRadioTotalCost());
        assert.equal(0.75, radioBill.getRadioTotalSmsCost());
        assert.equal(2.75, radioBill.getRadioTotalCallCost());
    });


    it("should return 5.50 if a user select 2 calls and it must not count any input" , function(){

        let radioBill = calculateRadioBill();

        
        radioBill.setRadioCriticalLevel(10);
        radioBill.setRadioCallCost(2.75);
        radioBill.setRadioSmsCost(0.75);

        radioBill.checkCall();
        radioBill.checkCall();

        assert.equal(5.50, radioBill.getRadioTotalCost());
        assert.equal(0.00, radioBill.getRadioTotalSmsCost());
        assert.equal(5.50, radioBill.getRadioTotalCallCost());
    });

    it("should return 2.25 if a user select 3 smses and it must not count any input" , function(){

        let radioBill = calculateRadioBill();

        
        radioBill.setRadioCriticalLevel(10);
        radioBill.setRadioCallCost(2.75);
        radioBill.setRadioSmsCost(0.75);

        radioBill.checkSms();
        radioBill.checkSms();
        radioBill.checkSms();

        assert.equal(2.25, radioBill.getRadioTotalCost());
        assert.equal(2.25, radioBill.getRadioTotalSmsCost());
        assert.equal(0.00, radioBill.getRadioTotalCallCost());
    });
});

    describe("Warning & Critical level", function(){

        it("should return a class name of 'warning' if warning level is reached", function (){
    
                let radioBill = calculateRadioBill();
    
                radioBill.setRadioCallCost(2.00);
                radioBill.setRadioSmsCost(0.85);
                radioBill.setRadioWarningLevel(5);
                radioBill.setRadioCriticalLevel(10);
    
                radioBill.checkCall();
                radioBill.checkCall();
                radioBill.checkCall();
                radioBill.checkSms();
                
                assert.equal("warning", radioBill.radioTotalClassName());
                assert.equal(6.85, radioBill.getRadioTotalCost());
        });

            it("should return a class name of 'danger' if critical level is reached", function (){
        
                    let radioBill = calculateRadioBill();
        
                    radioBill.setRadioCallCost(2.00);
                    radioBill.setRadioSmsCost(0.85);
                    radioBill.setRadioWarningLevel(5);
                    radioBill.setRadioCriticalLevel(10);
        
                    radioBill.checkCall();
                    radioBill.checkCall();
                    radioBill.checkCall();
                    radioBill.checkCall();
                    radioBill.checkCall();
                    
                    assert.equal("danger", radioBill.radioTotalClassName());
                    assert.equal(10.00, radioBill.getRadioTotalCost());
            });
    });