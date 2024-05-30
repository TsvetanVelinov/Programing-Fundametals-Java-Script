// function orders(product, count) {

//     // totalPrice = 0;

//     // switch (product) {
//     //     case "coffee": totalPrice = count * 1.50;

//     //         break;
//     //     case "water": totalPrice = count * 1.00;

//     //         break;
//     //     case "coke": totalPrice = count * 1.40;

//     //         break;
//     //     case "snacks": totalPrice = count * 2.00;
//     //         break;
//     // }

//     // console.log(totalPrice.toFixed(2));


// }

// orders("water", 5)
// orders("coffee", 2)


// Разбира се, ето версиите на предишните решения, където съм използвал let вместо const. Ще заменя само декларирането на променливите, докато логиката на функциите остава същата.
// 1. Използване на обект за цени и стрелкова функция


// let prices = {
//     coffee: 1.50,
//     water: 1.00,
//     coke: 1.40,
//     snacks: 2.00
// };

// let orders = (product, count) => {
//     let totalPrice = prices[product] * count;
//     console.log(totalPrice.toFixed(2));
// };

// orders("water", 5);
// orders("coffee", 2);

// 2. Използване на функция, връщаща функция (Higher-Order Function)


function createOrderCalculator(prices) {
    return function (product, count) {
        let totalPrice = prices[product] * count;
        console.log(totalPrice.toFixed(2));
    };
}

let prices = {
    coffee: 1.50,
    water: 1.00,
    coke: 1.40,
    snacks: 2.00
};

let orders = createOrderCalculator(prices);

orders("water", 5);
orders("coffee", 2);