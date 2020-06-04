describe("The text-bill factory function", function(){

    it("should be able to set the call cost that is entered" , function(){

        var textBill = calculateTextBill();

        textBill.setCallCost(2.75);
        assert.equal(2.75, textBill.getCallCost());
    })

    it("should be able to set the sms cost that is entered" , function(){

        var textBill = calculateTextBill();

        textBill.setSmsCost(0.75);
        assert.equal(0.75, textBill.getSmsCost());
    })

    it("should be able to set the call & sms that is entered" , function(){

        var textBill = calculateTextBill();

        textBill.setSmsCost(0.75);
        textBill.setCallCost(2.75);

        assert.equal(0.75, textBill.getSmsCost());
        assert.equal(2.75, textBill.getCallCost());
    })

    it("should be able to set the warning level" , function(){

        let textBill = calculateTextBill();
    
        textBill.setTextWarningLevel(5);
        assert.equal(5, textBill.getTextWarningLevel());
    
    });

    it("should be able to set the critical level" , function(){

        let textBill = calculateTextBill();
    
        textBill.setTextCriticalLevel(10);
        assert.equal(10, textBill.getTextCriticalLevel());
    
    });

    it("should be able to set the warning & critical level" , function(){

        var textBill = calculateTextBill();

        textBill.setTextWarningLevel(5);
        textBill.setTextCriticalLevel(10);

        assert.equal(5, textBill.getTextWarningLevel());
        assert.equal(10, textBill.getTextCriticalLevel());
    })
});

describe("Use values", function(){

    it("should be able to use the call & sms cost that is entered" , function(){

        let textBill = calculateTextBill();

        
        textBill.setTextCriticalLevel(10);
        textBill.setCallCost(2.75);
        textBill.setSmsCost(0.75);

        textBill.enterCall();
        textBill.enterCall();
        textBill.enterSms();

        assert.equal(6.25, textBill.getTextTotal());
        assert.equal(0.75, textBill.getTextTotalSms());
        assert.equal(5.50, textBill.getTextTotalCall());
    });

    it("should return 11.00 if user enters 4 calls" , function(){

        let textBill = calculateTextBill();

        
        textBill.setTextCriticalLevel(10);
        textBill.setCallCost(2.75);
        textBill.setSmsCost(0.75);

        textBill.enterCall();
        textBill.enterCall();
        textBill.enterCall();
        textBill.enterCall();

        assert.equal(11.00, textBill.getTextTotal());
        assert.equal(0.00, textBill.getTextTotalSms());
        assert.equal(11.00, textBill.getTextTotalCall());
    });

    it("should return 1.50 if user enters 2 sms" , function(){

        let textBill = calculateTextBill();

        
        textBill.setTextCriticalLevel(10);
        textBill.setCallCost(2.75);
        textBill.setSmsCost(0.75);

        textBill.enterSms();
        textBill.enterSms();
        

        assert.equal(1.50, textBill.getTextTotal());
        assert.equal(1.50, textBill.getTextTotalSms());
        assert.equal(0.00, textBill.getTextTotalCall());
    });
});

describe("Warning & Critical level", function(){

    it("should return a class name of 'warning' if warning level is reached", function (){

            let textBill = calculateTextBill();

            textBill.setCallCost(2.75);
            textBill.setSmsCost(0.85);
            textBill.setTextWarningLevel(5);
            textBill.setTextCriticalLevel(10);

            textBill.enterCall();
            textBill.enterCall();
            textBill.enterCall();
            
            assert.equal("warning", textBill.textTotalClassName());
            assert.equal(8.25, textBill.getTextTotal());
    });

    it("should return a class name of 'danger' if critical level is reached", function (){

        let textBill = calculateTextBill();

        textBill.setCallCost(2.75);
        textBill.setSmsCost(0.85);
        textBill.setTextWarningLevel(5);
        textBill.setTextCriticalLevel(10);

        textBill.enterCall();
        textBill.enterCall();
        textBill.enterCall();
        textBill.enterSms();
        textBill.enterSms();
        textBill.enterSms();
        
        assert.equal("danger", textBill.textTotalClassName());
        assert.equal(10.80, textBill.getTextTotal());
});
});