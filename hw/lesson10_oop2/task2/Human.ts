export class Human {
    private firstName: string;
    private lastname: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastname = lastName;
    }

    public showName() {
        console.log(`My name is ${this.firstName}  ${this.lastname}`);
    }
}
