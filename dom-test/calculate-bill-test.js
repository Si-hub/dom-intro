describe("The calculate-bill factory function", function(){

    it("should be able to set the call cost that is entered" , function(){

        var calculateBill = calculateBillEvent();

        calculateBill.setCallCost(2.75);
        assert.equal(2.75, calculateBill.getCallCost());
    })

    it("should be able to set the sms cost that is entered" , function(){

        var calculateBill = calculateBillEvent();

        calculateBill.setSmsCost(0.75);
        assert.equal(0.75, calculateBill.getSmsCost());
    })

    it("should be able to set the call & sms that is entered" , function(){

        var calculateBill = calculateBillEvent();

        calculateBill.setSmsCost(0.75);
        calculateBill.setCallCost(2.75);

        assert.equal(0.75, calculateBill.getSmsCost());
        assert.equal(2.75, calculateBill.getCallCost());
    })


    it("should be able to set the warning level" , function(){

        let calculateBill = calculateBillEvent();
    
        calculateBill.setCalcWarningLevel(5);
        assert.equal(5, calculateBill.getCalcWarningLevel());
    
    });

    it("should be able to set the critical level" , function(){

        let calculateBill = calculateBillEvent();
    
        calculateBill.setCalcCriticalLevel(10);
        assert.equal(10, calculateBill.getCalcCriticalLevel());
    
    });

    it("should be able to set the warning & critical level" , function(){

        var calculateBill = calculateBillEvent();

        calculateBill.setCalcWarningLevel(5);
        calculateBill.setCalcCriticalLevel(10);

        assert.equal(5, calculateBill.getCalcWarningLevel());
        assert.equal(10, calculateBill.getCalcCriticalLevel());
    })
});

    describe("Use values", function(){

        it("should be able to use the call & sms cost that is entered" , function(){
    
            let calculateBill = calculateBillEvent();
    
            
            calculateBill.setCalcCriticalLevel(10);
            calculateBill.setCallCost(2.75);
            calculateBill.setSmsCost(0.75);
    
            calculateBill.enteredCall();
            calculateBill.enteredCall();
            calculateBill.enteredSms();
            calculateBill.enteredSms();
    
            assert.equal(7.00, calculateBill.getCalculateTotal());
            assert.equal(1.50, calculateBill.getTotalSms());
            assert.equal(5.50, calculateBill.getTotalCall());
        });

        it("should return 5.50 if user enters 2 calls" , function(){
    
            let calculateBill = calculateBillEvent();
    
            
            calculateBill.setCalcCriticalLevel(10);
            calculateBill.setCallCost(2.75);
            calculateBill.setSmsCost(0.75);
    
            calculateBill.enteredCall();
            calculateBill.enteredCall();
    
            assert.equal(5.50, calculateBill.getCalculateTotal());
            assert.equal(0.00, calculateBill.getTotalSms());
            assert.equal(5.50, calculateBill.getTotalCall());
        })

        it("should return 0.75 if user only enters 1 sms" , function(){
    
            let calculateBill = calculateBillEvent();
    
            
            calculateBill.setCalcCriticalLevel(10);
            calculateBill.setCallCost(2.75);
            calculateBill.setSmsCost(0.75);
    
            calculateBill.enteredSms();
    
            assert.equal(0.75, calculateBill.getCalculateTotal());
            assert.equal(0.75, calculateBill.getTotalSms());
            assert.equal(0.00, calculateBill.getTotalCall());
        })
    });
       
    describe("Warning & Critical level", function(){

        it("should return a class name of 'warning' if warning level is reached", function (){
    
                let calculateBill = calculateBillEvent();
    
                calculateBill.setCallCost(2.75);
                calculateBill.setSmsCost(0.85);
                calculateBill.setCalcWarningLevel(5);
                calculateBill.setCalcCriticalLevel(10);
    
                calculateBill.enteredCall();
                calculateBill.enteredCall();
                
                
                assert.equal("warning", calculateBill.calculateTotalClassName());
                assert.equal(5.50, calculateBill.getCalculateTotal());
        });
    
        it("should return a class name of 'danger' if critical level is reached", function (){
    
            let calculateBill = calculateBillEvent();
    
            calculateBill.setCallCost(2.75);
            calculateBill.setSmsCost(0.85);
            calculateBill.setCalcWarningLevel(5);
            calculateBill.setCalcCriticalLevel(10);
    
            calculateBill.enteredCall();
            calculateBill.enteredCall();
            calculateBill.enteredCall();
            calculateBill.enteredSms();
            calculateBill.enteredSms();
            calculateBill.enteredSms();
            
            assert.equal("danger", calculateBill.calculateTotalClassName());
            assert.equal(10.80, calculateBill.getCalculateTotal());
    });    
});
   