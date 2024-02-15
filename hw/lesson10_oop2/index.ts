import { LuxuryCar } from "./task1/LuxuryCar";
import { SportCar } from "./task1/SportCar";
import { Human } from "./task2/Human";
import { Car } from "./task3/Car";

taskOne();
taskTwo();
taskThree();

function taskOne() {
    let lexus = new LuxuryCar("Lexus", "electro", 250, 25000);
    let galardo = new SportCar("Lamborghini", "disel", 300, 89000, 350);

    lexus.showMaxSpeed();
    galardo.showMaxSpeed();
}

function taskTwo() {
    let man = new Human("Thomas", "Shelby");
    let women = new Human("Melisa", "Shelby");
    man.showName();
    women.showName();
}

function taskThree() {
    let lexus = new Car(2, "left-handed");
    let porshe = new Car(5, "right-handed");

    lexus.showCarInfo();
    porshe.showCarInfo();
}