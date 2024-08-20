"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = epochToUtc;
function epochToUtc(epoch) {
    const epochNumber = Math.floor(Number(epoch) / 1000);
    const utc = new Date(epochNumber * 1000);
    const localDateTime = utc.toLocaleString();
    //console.log('Epoch:', epoch, '-> UTC:', localDateTime)
    return localDateTime;
}
