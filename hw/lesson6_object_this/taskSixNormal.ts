class Customer {
    private userName: string;
    private password: string;

    constructor(userName: string, password: string) {
        this.userName = userName;
        this.password = password;
    }

    public getUserName() {
        return this.userName;
    }

    public getPassword() {
        return this.password;
    }
}

function validator(userName: string, password: string): Customer {
    return new Customer(userName, password);
}

function login(userName: string, password: string, customer: Customer) {
    if (
        userName === customer.getUserName() &&
        password === customer.getPassword()
    ) {
        console.log("**Добро пожалоВать**");
    } else {
        console.log("Incorrect creds,дядько");
    }
}

let userOne = validator("kirill", "pass1");
login("kirill", "passs1", userOne);