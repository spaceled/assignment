//https://github.com/spaceled/assignment

// Covert Kilometer to Meter
function kilometerToMeter(kilometer) {
    return kilometer * 1000;
}

// Total cost of watch, Phone and Laptop
function budgetCalculator(watch, phone, laptop) {
    var totalCost = watch * 50 + phone * 100 + laptop * 500;
    return totalCost;
}

// Hotel Cost
function hotelCost(day) {
    if (day <= 10) {
        var firstPart = day * 100;
        return firstPart;
    }
    else if (day <= 20) {
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
        return cost;

    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50 + secondPart + firstPart;
        return thirdPart;
    }
}

// megaFriend: How to find largest friend name
function megaFriend(friendList) {
    var largest = friendList[0];
    if (friendList.length == 0) {
        return 'ATTENTION! List is Empty';
    }
    for (var i = 0; i < friendList.length; i++) {
        if (largest.length < friendList[i].length) {
            largest = friendList[i];
        }
    }
    return largest;
}