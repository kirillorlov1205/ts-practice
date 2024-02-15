import { Doctors } from "../types";

export class Doctor {
    constructor(private name: string, private type: Doctors) {}

    public getName() {
        return this.name;
    }

    public getType() {
        return this.type;
    }

    treat() {
        console.log(
            `Your doctor will be: ${Doctors[this.type]} ${this.getName()}`
        );
    }
}
