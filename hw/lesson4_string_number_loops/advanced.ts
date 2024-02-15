// taskOne();
// taskTwo("Hello");
// taskThree();
taskFour("kirill, thonny, thommy");
taskFive("hello");

function taskOne() {
    // 1 + 2 + false + (10 * "hello") // NaN;
    // 100 - "100px"; // NaN
    // 100 - Number.parseFloat("10.5px"); //89.5
    // false + 0 / 10; // 0
    // 44 / 0 + 55; // infinite
    // undefined - "undefined"; // NaN
    // undefined + null - false; // NaN
}

function taskTwo(str: string) {
    for (let i = 0; i < str.length; i++) {
        console.log(str.charCodeAt(i));
    }
}

function taskThree() {
    for (let i = 100; i >= 1; i--) {
        console.log(i);
    }
}

function taskFour(str: string) {
    let arr = str.split(", ");
    let formatedString = "";

    for (let i = 0; i < arr.length; i++) {
        let editedWord: string = arr[i][0]
            .toUpperCase()
            .concat(arr[i].slice(1));

        if (i === arr.length - 1) {
            formatedString += editedWord;
        } else {
            formatedString += editedWord + ", ";
        }
    }
    console.log(formatedString);
}

function taskFive(str: string) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    console.log(result);
}