taskOne("zakaz");
taskTwo();
taskThree();
taskFour();

function taskOne(str: string) {
    let reversedStr = str.split("").reverse().join("");
    console.log(reversedStr === str);

    // or
    // let reversedStr = "";
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reversedStr += str[i];
    // }
    // console.log(reversedStr === str);
}

function taskTwo() {
    const matrix = [
        [12, 98, 78, 65, 23],
        [54, 76, 98, 43, 65],
        [13, 324, 65, 312],
        [9092, 22, 45, 90000],
    ];

    let sum = 0;
    let count = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
            count++;
        }
    }
    console.log(sum / count);

    // or
    // let sum = 0;
    // let count = 0;
    // matrix.forEach((item) => {
    //     item.forEach((num) => {
    //         count++
    //         sum += num;
    //     });
    // });
    // console.log(sum / count);
}

function taskThree() {
    const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];

    let positiveArr = mixedNumbers.filter((item) => {
        return item >= 0;
    });

    let negativeArr = mixedNumbers.filter((item) => {
        return item < 0;
    });

    console.log(positiveArr, negativeArr);
}

function taskFour() {
    let mixedNumbers = [];
    for (let i = 0; i < 5; i++) {
        let randomNumber = Math.floor(Math.random() * 10);
        mixedNumbers.push(randomNumber);
    }

    let newArr: number[] = mixedNumbers.map((item) => item ** 3);
    console.log(mixedNumbers, newArr);
}
