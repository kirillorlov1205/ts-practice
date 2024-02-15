import { Doctors } from "../types";
import { Doctor } from "./Doctor";

export class Dentist extends Doctor {
    constructor(name: string, type: Doctors) {
        super(name, type);
    }
}
