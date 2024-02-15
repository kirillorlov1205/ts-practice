console.log(taskOne());
console.log(taskTwo());
taskThree();
taskFour();
taskFive();
taskSix();
taskSeven();

function taskOne() {
    const colors = ["red", "green", "blue"];
    return colors.length;
}

function taskTwo() {
    const animals = ["monkey", "dog", "cat"];
    return animals[animals.length - 1];
}

function taskThree() {
    const numbers = [5, 43, 63, 23, 90];
    numbers.length = 0;
    console.log(numbers);
}

function taskFour() {
    const students = ["Polina", "Dasha", "Masha"];
    students.pop();
    students.push("Borya");
    students.shift();
    students.unshift("Andrey");
    console.log(students);
}

function taskFive() {
    const cats = ["Gachito", "Tom", "Batman"];
    for (let i = 0; i < cats.length; i++) {
        console.log(cats[i]);
    }

    for (let cat of cats) {
        console.log(cat);
    }
}

function taskSix() {
    const evenNumbers = [2, 4, 6, 8, 10];
    const oddNumbers = [1, 3, 5, 7, 9];

    let newArr: number[] = evenNumbers.concat(oddNumbers);
    console.log(newArr[8]);
}

function taskSeven() {
    const binary = [0, 0, 0, 0];

    let str: string = binary.join("1");
    console.log(str);
}