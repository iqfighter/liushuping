function charge(kilometers, waitingMinutes) {
    check(kilometers, waitingMinutes);
    
    var distanceCharging = chargeDistance(kilometers);
    var waitingCharging = chargeWaiting(waitingMinutes);
    return Math.round(distanceCharging + waitingCharging);
}

function check(kilometers, waitingCharging) {
    if (!(kilometers >= 0)) throw Error("Invalid charging distance!");
}

function chargeDistance(kilometers) {
    return Math.max(0, kilometers - 8) * 0.4 + 
           Math.max(0, kilometers - 2) * 0.8 + 6;
}

function chargeWaiting(waitingMinutes) {
    return waitingMinutes * 0.25;
}

module.exports = {
    charge: charge
}