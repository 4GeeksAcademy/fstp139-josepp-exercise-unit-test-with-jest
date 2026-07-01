const { sum, oneEuroIs, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');


console.log(oneEuroIs)

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be " + oneEuroIs.USD + " dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * oneEuroIs.USD; 
    expect(dollars).toBe(expected);
})

/////////////////////////
// DOLLARS TO YENS /////////////////////////
/////////////////////////

// COMPARACION ESTRICTA /////////
test("1 dollar should be close to 146.26 yens", function() {
    const yens = fromDollarToYen(1);
    console.log(yens)
    const expected = 146.26
    expect(yens).toBeCloseTo(expected);
});
// COMPARACION CON CAMBIO ACTUAL /////////
test("3.5 dollars should be correctly converted to yens", function() {    
    const yens = fromDollarToYen(3.5);
    const expected = (3.5 / oneEuroIs.USD) * oneEuroIs.JPY; 
    expect(yens).toBe(expected);
});

/////////////////////////
/////////////////////////

/////////////////////////
// YENS TO POUNDS /////////////////////////
/////////////////////////

// COMPARACION ESTRICTA /////////
test("1 yen should be close to 0.0055 pounds", function() {    
    const pounds = fromYenToPound(1);    
    const expected = 0.0055;
    expect(pounds).toBeCloseTo(0.0055);
});
// COMPARACION CON CAMBIO ACTUAL /////////
test("3.5 yens should be correctly converted to pounds", function() {    
    const pounds = fromYenToPound(3.5);    
    const expected = (3.5 / oneEuroIs.JPY) * oneEuroIs.GBP;     
    expect(pounds).toBe(expected);
});

/////////////////////////
/////////////////////////