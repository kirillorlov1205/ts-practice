export class Car {
    private model: string;
    private make: string;
    private isEngineOn: boolean;

    public constructor(model: string, make: string) {
        this.model = model;
        this.make = make;
        this.isEngineOn = false;
    }

    public getModel() {
        return this.model;
    }

    public getMake() {
        return this.make;
    }

    public getIsEngineOn() {
        return this.isEngineOn;
    }

    public setMake(make: string) {
        this.make = make;
    }

    public startEngine() {
        this.isEngineOn = true;
    }

    public stopEnigne() {
        this.isEngineOn = false;
    }

    public static speedUp() {
        console.log("Vrum-vrum");
    }
}

let bmw5: Car = new Car("5", "BMW");

console.log(bmw5.getIsEngineOn());

bmw5.startEngine();
console.log(bmw5.getIsEngineOn());

bmw5.stopEnigne();
console.log(bmw5.getIsEngineOn());
