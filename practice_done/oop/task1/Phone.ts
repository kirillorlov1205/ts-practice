export class Phone {
    constructor(
        private number: string,
        private model: string,
        private weight: number
    ) {}

    public receiveCall(callerName: string) {
        console.log(`${callerName} is calling`);
    }

    public getNumber(): string {
        return this.number;
    }

    public sendMessage(...numbers: string[]) {
        numbers.forEach((number) => {
            console.log(`Message was sent to number '${number}'`);
        });
    }
}
