let food = [
    { name: " ORANGE", price: 500, isFruit: true },
    { name: "burger", price: 100, isFruit: false },
    { name: "watermelon", price: 210, isFruit: false },
    { name: "toast", price: 350, isFruit: false },
    { name: "apple ", price: 140, isFruit: true },
    { name: " bAn ana", price: 380, isFruit: true }
]

// 1)

// forEach

function foodName(arr) {
    let foodNamePriceMore = [];
    arr.forEach(item => {
        if (item.price > 200)
            foodNamePriceMore.push(item.name.toLowerCase());
    });
    return foodNamePriceMore;

}
let result = foodName(food);
console.log(result);

// filter + map

let foodNamePriceMore = food.filter(item => {
    return item.price > 200;
}).map(item => item.name.toLocaleLowerCase())

console.log(foodNamePriceMore)

reduce

let foodNamePriceMore = food.reduce((acc, item) => {
    if (item.price > 200) {
        acc.push(item.name.toLocaleLowerCase());
    }
    return acc;
}, []);

console.log(foodNamePriceMore)

// 2)

let salary = [1000, 500, 1200, 230]

function funSalary(arr) {
    return arr.slice().sort((a, b) => a - b).reverse();

}

let result = funSalary(salary);
console.log(result);

if (Array.isArray(result)) {
    console.log('Это массив!');
} else {
    console.log('Это не массив!');
}

// 3)

let serials = ["How i met your mom", "Friends", "Big bang theory"];

let str = serials.join()

console.log(str);

// 4)

forEach

function foodSum(arr) {
    let sum = 0;
    arr.forEach(item => {
        sum += item.price
    });
    return sum;
}
let result = foodSum(food);
console.log(result);

reduce

let foodSum = food.reduce((acc, item) => acc + item.price, 0);

console.log(foodSum);