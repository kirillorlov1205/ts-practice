taskOne("1:9");
taskTwo();
taskThree();

function taskOne(str: string) {
    let arr = str
        .split(":")
        .map((item) => {
            return getNumAsWord(item);
        })
        .join(" : ");

    console.log(arr);
}

function getNumAsWord(str: string): string {
    switch (str) {
        case "1":
            return "One";
        case "2":
            return "Two";
        case "3":
            return "Three";
        case "4":
            return "Four";
        case "5":
            return "Five";
        case "6":
            return "Six";
        case "7":
            return "Seven";
        case "8":
            return "Eight";
        case "9":
            return "Nine";
        case "9":
            return "Ten";
        default:
            return "";
    }
}

function taskTwo() {
    let student1 = {
        name: "Polina",
        age: 27,
    };
    let student2 = {
        name: "Polinaa",
        age: 27,
    };

    if (student1.name === student2.name && student1.age === student2.age) {
        console.log("Students are equal");
    } else {
        console.log("Students are different");
    }
}

function taskThree() {
    type Cat = {
        name: string;
        age: 3;
    };

    const cat: Cat = {
        name: "Енчик",
        age: 3,
    };

    let catTwo: Cat = JSON.parse(JSON.stringify(cat)) as typeof cat;
    let catThree: Cat = { ...cat };

    console.log(catTwo);
    console.log(catThree);
}