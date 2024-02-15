import { TreatmentPlan } from "./TreatmentPlan";
import { Doctor } from "../staff/Doctor";

export class Patient {
    constructor(
        private treatmentPlan: TreatmentPlan,
        private doctor?: Doctor
    ) {}

    public getTreatmentPlan() {
        return this.treatmentPlan;
    }

    public getDoctor() {
        return this.doctor;
    }

    public setDoctor(doctor: Doctor) {
        this.doctor = doctor;
    }
}
