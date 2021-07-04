//https://github.com/spaceled/assignment

// Covert Kilometer to Meter
function kilometerToMeter(kilometer) {
    var result =  kilometer * 1000;
    if (kilometer < 0) {
        return 'ATTENTION! Kilometer can not be negative.'
    }
    else {
        return result;
    }
}

// Total cost of watch, Phone and Laptop
function budgetCalculator(watch, phone, laptop) {
    var totalCost = watch * 50 + phone * 100 + laptop * 500;
    if (watch < 0 || phone < 0 || laptop < 0) {
        return 'ATTENTION! Please, enter positive value.'
    }
    else {
        return totalCost;
    }
    
}

// Hotel Cost
function hotelCost(day) {
    //  This will handle 0 or negative value
    if (day <= 0) {
        return "ATTENTION! Day can't be negative or Zero"
    }
    if (day <= 10) {
        var first10Days = day * 100;
        return first10Days;
    }
    else if (day <= 20) {
        var first10Days = 10 * 100; 
        var remaining = day - 10; // Total days MINUS first 10 days
        var second20Days = remaining * 80;
        cost = first10Days + second20Days;
        return cost;

    }
    else {
        var first10Days = 10 * 100;
        var second20Days = 10 * 80;
        var remaining = day - 20; // Total days MINUS first 20 days
        var second20Above = remaining * 50 + second20Days + first10Days;
        return second20Above;
    }
}

// megaFriend: How to find largest friend name
function megaFriend(friendList) {
    var largest = friendList[0];
    if (friendList.length == 0) {
        return 'ATTENTION! List is Empty'; // Handle Empty Array
    }
    for (var i = 0; i < friendList.length; i++) {
        if (largest.length < friendList[i].length) {
            largest = friendList[i];
        }
    }
    return largest;
}