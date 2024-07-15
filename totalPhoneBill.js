function phoneBillCalculator() {
    return {
        inputData: '',
        totalBill: '',

        calculateBill() {
            const costPerCall = 2.75;
            const costPerSms = 0.65;

            // Split input data into items, trimming whitespace
            const items = this.inputData.split(',').map(item => item.trim());

            // Initialize counters
            let calls = 0;
            let sms = 0;

            // Count calls and sms
            items.forEach(item => {
                if (item === 'call') {
                    calls++;
                } else if (item === 'sms') {
                    sms++;
                }
            });

            // Calculate total bill
            let total = calls * costPerCall + sms * costPerSms;

            // Format total bill as 'R' currency
            this.totalBill = 'R' + total.toFixed(2);
        }
    };
}


document.addEventListener('alpine:init', function () {
    Alpine.data('totalPhoneBill',  totalPhoneBill)
});