taskOne("This website is for losers LOL!");
taskTwo("RqaEzty");
taskThree("1 9 5 4 5");
console.log(taskFour("Dermatoglyphics"));

function taskOne(str: string) {
    let arr = str.split("");

    let filterdArr: string[] = [];
    arr.forEach((item) => {
        if (!isVowel(item)) {
            filterdArr.push(item);
        }
    });
    console.log(filterdArr.join(""));
}

function isVowel(str: string): boolean {
    if (
        str === "a" ||
        str === "e" ||
        str === "i" ||
        str === "o" ||
        str === "u"
    ) {
        return true;
    } else {
        return false;
    }
}

function taskTwo(str: string) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (i == str.length - 1) {
            result += str[i].toUpperCase() + str[i].toLowerCase().repeat(i);
        } else {
            result +=
                str[i].toUpperCase() + str[i].toLowerCase().repeat(i) + "-";
        }
    }

    console.log(result);
}

function taskThree(str: string) {
    let newArr = str.split(" ").sort((a, b) => Number(a) - Number(b));

    console.log(`max: '${newArr[newArr.length - 1]}', min:'${newArr[0]}'`);
}

function taskFour(str: string) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i].toLowerCase() === str[j].toLowerCase()) {
                return false;
            }
        }
    }
    return true;
}