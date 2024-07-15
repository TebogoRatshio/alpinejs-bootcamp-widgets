function airtimeCalculator() {
    return {
        usage: '',
        availableAirtime: 0,
        result: null,

        calculateRemainingAirtime() {
            const costPerCall = 1.88;
            const costPerData = 12.00;
            const costPerSMS = 0.75;

            const usages = this.usage.split(',').map(item => item.trim());

            let totalCost = 0;
            usages.forEach(item => {
                if (item === 'call') {
                    totalCost += costPerCall;
                } else if (item === 'data') {
                    totalCost += costPerData;
                } else if (item === 'sms') {
                    totalCost += costPerSMS;
                }
            });

            let remainingAirtime = this.availableAirtime - totalCost;

            if (remainingAirtime < 0) {
                this.result = 'R0.00';
            } else {
                this.result = 'R' + remainingAirtime.toFixed(2);
            }
        }
    };
}

document.addEventListener('alpine:init', function () {
    Alpine.data('enoughAirtime',  enoughAirtime)
});