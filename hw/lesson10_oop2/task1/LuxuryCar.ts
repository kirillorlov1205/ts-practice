import { Car } from "./Car";

export class LuxuryCar extends Car {
    private carSpeed: number;
    private carCost: number;

    public constructor(
        name: string,
        engineType: string,
        carSpeed: number,
        carCost: number
    ) {
        super(name, engineType);
        this.carCost = carCost;
        this.carSpeed = carSpeed;
    }

    public showMaxSpeed(): void {
        console.log(
            `This is ${this.name}. It has ${this.engineType} engine and max speed equal to ${this.carSpeed}. Approximetly cost of the car is ${this.carCost}`
        );
    }
}
