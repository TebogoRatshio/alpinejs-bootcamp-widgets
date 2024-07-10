function transportFee(shift) {
    switch (shift) {
        case 'morning':
            return 'R20';
        case 'afternoon':
            return 'R10';
        case 'nightshift':
            return 'free';
        default:
            return 'Invalid shift';
    }
}

console.log(transportFee('morning')); 
console.log(transportFee('afternoon')); 
console.log(transportFee('nightshift')); 