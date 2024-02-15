const ACCOUNT_BALANCE = 1000.2;
const FEE_PERCENT = 10.5;
const PHONE_PRICE = 100.5;
const ACCESSORY_PRICE = 5.8;

buyPhone(3);

function buyPhone(phoneQuantity: number) {
    let sum = 0;
    for (let i = 1; i <= phoneQuantity; i++) {
        sum += PHONE_PRICE + ACCESSORY_PRICE;
    }

    let fee = (sum / 100) * FEE_PERCENT;
    let sumWithFee = sum + fee;

    if (sumWithFee > ACCOUNT_BALANCE) {
        console.log("Куда ты лезешь, тюбик");
    } else {
        console.log("Ну хорош");
    }

    console.log(
        `You buy '${phoneQuantity}' phones. Total sum:'$${sumWithFee.toFixed(
            2
        )}`
    );
}

function makeCounter() {
    var currentCount = 1;

    return function () {
        console.log(currentCount);
        return currentCount++;
    };
}

var counter = makeCounter();

console.log(makeCounter());

/* #### Task 2 👨‍🏫
Сделайте функцию, которая считает и выводит количество своих вызовов. */
