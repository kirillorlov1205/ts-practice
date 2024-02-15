import { Doctors } from "../types";
import { Doctor } from "./Doctor";

export class Therapist extends Doctor {
    constructor(name: string, type: Doctors) {
        super(name, type);
    }
}
