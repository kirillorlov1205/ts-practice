taskOne();
console.log(taskTwo("firstName"));
taskThree();
taskFour();
taskFive();

function taskOne() {
    type Car = {
        mark: string;
        model: string;
        millage?: number;
    };

    let carOne: Car = {
        mark: "BMW",
        model: "X7",
        millage: 11000,
    };

    delete carOne["millage"];
    console.log(carOne);
}

function taskTwo(prop: string) {
    type User = {
        firstName: string;
        lastName: string;
        age?: number;
    };

    let userOne: User = {
        firstName: "Mark",
        lastName: "Taner",
    };

    if (userOne.hasOwnProperty(prop)) {
        return true;
    } else {
        return false;
    }
}

function taskThree() {
    type Student = {
        name: string;
        age: number;
        isHappy: boolean;
    };
    let student: Student = {
        name: "John",
        age: 19,
        isHappy: true,
    };

    for (let key in student) {
        console.log(key);
    }

    for (let key in student) {
        const value = student[key as keyof typeof student];
        console.log(value);
    }
}

function taskFour() {
    const colors = {
        "ru pum pu ru rum": {
            red: "красный",
            green: "зеленый",
            blue: "синий",
        },
    };

    console.log(colors["ru pum pu ru rum"].red);
    console.log(colors["ru pum pu ru rum"].blue);
}

function taskFive() {
    let salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        alexandra: 199,
    };

    let sum: number = 0;
    let count: number = 0;

    for (const key in salaries) {
        sum += salaries[key as keyof typeof salaries];
        count++;
    }
    console.log(sum / count);
}