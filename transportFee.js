function transportFeeCalculator() {
    return {
        selectedShift: 'morning',
        fee: '',

        calculateFee() {
            switch (this.selectedShift) {
                case 'morning':
                    this.fee = 'R20';
                    break;
                case 'afternoon':
                    this.fee = 'R10';
                    break;
                case 'nightshift':
                    this.fee = 'Free';
                    break;
                default:
                    this.fee = 'Invalid shift';
            }
        }
    };
}


document.addEventListener('alpine:init', function () {
    Alpine.data('transportFee',  transportFee)
});