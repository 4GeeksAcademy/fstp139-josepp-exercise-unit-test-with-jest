const sum = (a, b) => {
    return a + b
}


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function (valueInEuro) {    
    let valueInDollar = valueInEuro * oneEuroIs.USD;    
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollars) {
    const euros = valueInDollars / oneEuroIs.USD;
    const valueInYens = euros * oneEuroIs.JPY;    
    return valueInYens;
}

const fromYenToPound = function (valueInYens) { 
    const euros = valueInYens / oneEuroIs.JPY;    
    const valueInPounds = euros * oneEuroIs.GBP;    
    return valueInPounds;
}

module.exports = { sum, oneEuroIs, fromEuroToDollar, fromDollarToYen, fromYenToPound }
