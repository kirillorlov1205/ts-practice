import { Car } from "./Car";

export class Bmw extends Car {
    constructor(
        make: string,
        model: string,
        doorQuantity: number,
        year: number,
        hasTurbo: boolean,
        hasFuel: boolean
    ) {
        super(make, model, doorQuantity, year, hasTurbo, hasFuel);
    }
}
