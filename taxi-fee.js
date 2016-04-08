module.exports = {
    charge: function(kilometers, waitingMinutes) {
        var distanceCharge = 6;
        var waitingCharge = waitingMinutes * 0.25;
        return Math.round(distanceCharge + waitingCharge);
    }
}