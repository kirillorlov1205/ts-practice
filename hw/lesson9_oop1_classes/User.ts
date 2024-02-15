class User {
    private firstName: string;
    private lastName: string;
    private age: number;
    private address: object;

    public constructor(
        firstName: string,
        lastName: string,
        age: number,
        address: {
            house: number;
            street: string;
        }
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }

    public getFirstName() {
        return this.firstName;
    }

    public getLastName() {
        return this.lastName;
    }

    public getAge() {
        return this.age;
    }

    public getAddress() {
        return this.address;
    }

    public drink() {
        console.log("mmmmm... nice...");
    }

    public eat() {
        console.log("Yammy - Yammy");
    }
}

let thomas = new User("Thomas", "Shelby", 31, {
    house: 41,
    street: "Mahilouskaya",
});

console.log(thomas.getAddress());
