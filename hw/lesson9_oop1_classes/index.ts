import { Car } from "./Car";
//
let bmw5: Car = new Car("5", "BMW");

console.log(bmw5.getIsEngineOn());

bmw5.startEngine();
console.log(bmw5.getIsEngineOn());

bmw5.stopEnigne();
console.log(bmw5.getIsEngineOn());
