export class Car {
    doorQuantity: number;
    wheelSide: string;

    public constructor(doorQuantity: number, wheelSide: string) {
        this.doorQuantity = doorQuantity;
        this.wheelSide = wheelSide;
    }

    public showCarInfo() {
        console.log(
            `This car has ${this.doorQuantity} doors and this is ${this.wheelSide} drive car`
        );
    }
}
