// taskOne("Kirill Orlov");
// taskTwo("Кулл, я учу typescript!");
// taskThree("У нас в клубе", 2);
// taskFour("я учу typescript!");
// taskFive("я учу typescript!");
// taskSix("я учу typescript!");
// taskSeven(" я учу typescript! ");
// taskEight(8.829734872948);
// taskNine(2.23);
// taskTen(10.2);
// taskEleven(10,2);
// taskTwelve(1, 10);
// taskThirteen(1, 10);
// taskThirteen(1, 10);

function taskOne(userName: string) {
    let firstName = userName.slice(0, userName.indexOf(" "));
    let lastName = userName.slice(userName.indexOf(" ") + 1);

    // second solution
    // let firstName = userName.split(" ")[0]
    // let lastName = userName.split(" ")[1]

    for (let i = 0; i < 5; i++) {
        if (i % 2 == 0) {
            console.log(
                `Привет ${firstName.toUpperCase()} ${lastName.toUpperCase()}`
            );
        } else {
            console.log(
                `Привет ${firstName.toLowerCase()} ${lastName.toLowerCase()}`
            );
        }
    }
}

function taskTwo(str: string) {
    let sentence = "я учу typescript!";

    if (str.includes(sentence)) {
        console.log(str.indexOf("учу"));
    } else {
        console.log("Данной подстроки нет");
    }
}

function taskThree(str: string, index: number) {
    if (index < str.length) {
        console.log(str.charAt(index));
    } else {
        console.log("Вы вышли за границу строки");
    }
}

function taskFour(str: string) {
    console.log(str.endsWith("."));
}

function taskFive(str: string) {
    if (str.includes("я учу typescript!")) {
        let wordOne = str.slice(str.indexOf("учу"), 6);
        let wordTwo = str.slice(str.indexOf("typescript"), 16);

        console.log(wordOne);
        console.log(wordTwo);
    } else {
        console.log("No no no, brother!");
    }
}

function taskSix(str: string) {
    let arr = str.split(" ");
    console.log(arr);
}

function taskSeven(str: string) {
    console.log(str.trim());
}

function taskEight(num: number) {
    console.log(num.toFixed(3));
}

function taskNine(num: number) {
    if (Number.isInteger(num)) {
        console.log(num);
    } else {
        console.log(Math.round(num));
    }
}

function taskTen(num: number) {
    if (typeof num === "number") {
        console.log(`${num} to min ${Math.floor(num)}`);
        console.log(`${num} to max: ${Math.ceil(num)}`);
        console.log(`${num} to int: ${Math.round(num)}`);
    } else {
        console.log("You gonna be kidding");
    }
}

function taskEleven(num: number, degree: number) {
    console.log(Math.pow(num, degree));
}

function taskTwelve(min: number, max: number) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNum);
}

function taskThirteen(min: number, max: number) {
    let randomNum = (Math.random() * (max - min) + min).toFixed(2);
    console.log(randomNum);
}