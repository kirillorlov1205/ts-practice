import { Student } from "./Student";

export class Dormitory {
    constructor(
        private address: string,
        private name: string,
        private studentList: Student[]
    ) {}
}
