taskOne();
taskTwo();
functionThree();
taskFour();
taskFive();
taskSix();
taskSeven();
taskEight();
taskNine(1, 1, 1, 2, 7, 325, 234, 54, 586, 23);
// taskTen(1, 23);

function taskOne() {
    const fibonacci = [
        0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
    ];
    fibonacci.forEach((item): void => console.log(item));
}

function taskTwo() {
    const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];
    let newArr = users.map((user) => {
        return `member: ${users.indexOf(user) + 1} '${user}'`;
    });
    console.log(newArr);
}

function functionThree() {
    const numbers = [7, -4, 32, -90, 54, 32, -21];
    let positiveArr = numbers.filter((item) => item >= 0);
    console.log(positiveArr);
}

function taskFour() {
    const fibonacci = [
        0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
    ];
    let sum = fibonacci.reduce((prevValue, currValue) => {
        return (prevValue += currValue);
    });
    console.log(sum);
}

function taskFive() {
    const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
    let result = numbers.find((item) => !(item % 2));
    console.log(result);
}

function taskSix() {
    const numbers = [5, 9, 15, 24, 54, 10, 13, 99, 1, 5];
    let result = numbers.some((item) => !(item % 3) && !(item % 5));
    console.log(result);
}

function taskSeven() {
    const numbers = [5, 9, 15, 24, 54, 10, 13, 99, 1, 5];
    let result = numbers.every((item) => {
        let sum = (item ** 2)
            .toString()
            .split("")
            .reduce((prev, current) => {
                prev += +current;
                return prev;
            }, 0);
        return !(sum % 2);
    });
    console.log(result);
}

function taskEight() {
    let map = new Map();
    map.set("Огурцы", 100);
    map.set("помидоры", 200);
    map.set("соль", 10);
    map.set("сметана", 110);

    console.log(map.get("помидоры"));

    map.forEach((value, key) => {
        if (value > 100) {
            console.log(`${key} : ${value}`);
        }
    });
}

function taskNine(...args: number[]) {
    let set = new Set(args);
    let newArr = Array.from(set);
    console.log(newArr);
}

function taskTen(...args: number[]) {
    let elem2 = args[1] ? args[1] : "bbb";
    let elem3 = args[2] ? args[2] : "eee";
    console.log(elem2, elem3);
}