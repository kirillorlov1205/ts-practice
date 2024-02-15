import { Car } from "./Car";

export class SportCar extends Car {
    private carSpeed: number;
    private carCost: number;
    private turboSpeed: number;

    public constructor(
        name: string,
        engineType: string,
        carSpeed: number,
        carCost: number,
        turboSpeed: number
    ) {
        super(name, engineType);
        this.carCost = carCost;
        this.carSpeed = carSpeed;
        this.turboSpeed = turboSpeed;
    }

    public showMaxSpeed(): void {
        console.log(
            `This is ${this.name}. It has ${this.engineType}, turboSpeed: '${this.turboSpeed}'  engine and max speed equal to ${this.carSpeed}. Approximetly cost of the car is ${this.carCost}`
        );
    }
}
