// taskOne(100);
// taskTwo(100);
// taskThree("Hello brother", 0, 4);
// taskFour(5555);
// taskFive(1, 2);
taskSix(
    true,
    () => console.log("foo"),
    () => console.log("boo")
);
taskSeven(6);

function taskOne(num: number) {
    let sum: number = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    console.log(sum);
}

function taskTwo(amount: number) {
    let percentAmount = (amount / 100) * 17;
    let overpayment = percentAmount * 5;
    console.log(overpayment);
}

function taskThree(str: string, from: number, to: number) {
    let result = "";

    for (let i = from; i <= to; i++) {
        result += str[i];
    }
    console.log(result);

    // or
    // result = str.slice(from, to);
    // console.log(result);
}

function taskFour(num: number) {
    let str = String(num);
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += +str[i];
    }
    console.log(sum);
}

function taskFive(numOne: number, numTwo: number) {
    let sum = 0;
    if (numOne === numTwo) {
        console.log(`${numOne} = ${numTwo}`);
    } else if (numOne < numTwo) {
        for (let i = numOne; i <= numTwo; i++) {
            sum += i;
        }
        console.log(sum);
    } else if (numOne > numTwo) {
        for (let i = numOne; i >= numTwo; i--) {
            sum += i;
        }
        console.log(sum);
    } else {
        console.log("Incorrect input");
    }
}

function taskSix(isTrue: boolean, foo: any, boo: any) {
    isTrue ? foo() : boo();
}

function taskSeven(num: number) {
    let result = factorial(num);
    console.log(`factorial of ${num} = ${result}`);
}

function factorial(num: number): any {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}