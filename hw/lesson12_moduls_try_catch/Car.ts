export abstract class Car {
    private make: string;
    private model: string;
    private doorQuantity: number;
    private year: number;
    private hasTurbo: boolean;
    private hasFuel: boolean;

    constructor(
        make: string,
        model: string,
        doorQuantity: number,
        year: number,
        hasTurbo: boolean,
        hasFuel: boolean
    ) {
        this.make = make;
        this.model = model;
        this.doorQuantity = doorQuantity;
        this.year = year;
        this.hasTurbo = hasTurbo;
        this.hasFuel = hasFuel;
    }

    public engineOn() {
        try {
            if (this.hasFuel) {
                console.log("Vrum-vrum");
            } else {
                throw new Error(
                    `Car '${this.make} ${this.model}' doesn't have fuel`
                );
            }
        } catch (error) {
            console.log(error);
        }
    }

    public engineOff() {
        console.log("Pshhh");
    }

    public clickSound() {
        console.log("Bibbbbb!!!!");
    }

    public getModel() {
        return this.model;
    }
}
