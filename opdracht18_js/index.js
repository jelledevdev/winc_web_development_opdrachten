const adultChecker = function (age) {
    if (age >= 18) {
        return true;
    }
    else { return false; }
}

const noKiddingChecker = function (age) {
    if (adultChecker(age)) {
        return "Hello there"
    }
    else { return "Hey kiddo"; }
}

console.log(noKiddingChecker(18))

const vatCalculator = function (price, percentage) {
    return addPercentage(price, percentage)

}
const addPercentage = function (number, percentage) { return (number * (percentage / 100)) + number }

console.log(vatCalculator(100, 21))



const brutoEnBtw = function(price, percentage) {
      const bruto = price / ((100 + percentage) / 100);
      const btw = (price-bruto);
        return [bruto, btw];
}
 console.log(brutoEnBtw(121,21))