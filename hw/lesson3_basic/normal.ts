// taskOne();
// taskTwo(1);
// taskThree();
// taskFour();
// taskFive();
// taskSix();
// taskSeven();
// taskEight();
// taskNine();
// taskTen();
// taskEleven(15);
// taskTweelve(18);
// taskThirteen("восток");

function taskOne() {
    let x: number = 20;
    let y: number = 58;
    let z: number = 42;
    let sum: number = x + y + z;
    console.log(sum);
}

function taskTwo(age: number) {
    let secondsInMinute: number = 60;
    let minutesInHour: number = 60;
    let hoursInDay: number = 24;
    let daysInYear: number = 365;
    let myAgeInSeconds =
        age * daysInYear * hoursInDay * minutesInHour * secondsInMinute;
    console.log(myAgeInSeconds);
}

function taskThree() {
    let count = 42;
    let userName = "42";

    // firts method
    let countstr: string = String(count);
    let userNameNum: number = Number(userName);
    console.log(typeof countstr);
    console.log(typeof userNameNum);

    // second method
    let countStrTwo: string = count.toString();
    let userNameNumtwo: number = +userName;
    console.log(typeof countStrTwo);
    console.log(typeof userNameNumtwo);
}

function taskFour() {
    let a = 1;
    let b = 2;
    let c = "белых медведей";

    console.log(`${a}${b} ${c}`);
}

function taskFive() {
    let a = "доступ";
    let b = "морпех";
    let c = "наледь";
    let d = "попрек";
    let e = "рубило";

    let lengthWords = 0;
    let arr: string[] = [a, b, c, d, e];

    arr.forEach((item: string) => (lengthWords += item.length));
    console.log(lengthWords);
}

function taskSix() {
    let a: string = "kirill";
    console.log(`Variable: ${a} have type: ${typeof a}`);

    let b: number = 123;
    console.log(`Variable: ${b} have type: ${typeof b}`);

    let c: boolean = false;
    console.log(`Variable: ${c} have type: ${typeof c}`);
}

function taskSeven() {
    let a = "true";
    let b = false;
    let c = 17;
    let d = undefined;
    let e = null;

    let arr = [a, b, c, d, e];

    for (let i = 0; i < arr.length; i++) {
        console.log(typeof arr[i]);
    }
}

function taskEight() {
    let height = 15;
    let width = 20;
    console.log(height > width ? height : width);
}

function taskNine() {
    for (let i = 0; i < 20; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

function taskTen() {
    let key = true;
    let documents = true;
    let pen = true;
    let apple = false;
    let orange = true;
    let shouldGoToWork: string;

    if (key && documents && pen && (apple || orange)) {
        shouldGoToWork = "Go to work";
    } else {
        shouldGoToWork = "You are not ready for it, man";
    }

    console.log(shouldGoToWork);
}

function taskEleven(num: number) {
    if (num % 5 == 0 && num % 3 == 0) {
        console.log("FizBuz");
    } else if (num % 3 == 0) {
        console.log("Buz");
    } else {
        console.log("Fiz");
    }
}

function taskTweelve(age: number) {
    if (age < 18) {
        console.log("Пей колу");
    } else if (age >= 16 && age <= 18) {
        console.log("Можешь выкурить сигаретку, только маме не говори");
    } else {
        console.log("Попей пивка, друже");
    }
}

function taskThirteen(side: string) {
    switch (side) {
        case "юг":
            console.log("на юг пойдешь счастье найдешь");
            break;
        case "север":
            console.log("на север пойдешь много денег найдешь");
            break;
        case "запад":
            console.log("на запад пойдешь верного друга найдешь");
            break;
        case "восток":
            console.log("на восток пойдешь разработчиком станешь");
            break;
        default:
            break;
    }
}