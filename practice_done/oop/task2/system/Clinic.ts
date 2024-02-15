import { Patient } from "./Patient";
import { Doctor } from "../staff/Doctor";
import { Therapist } from "../staff/Therapist";
import { Doctors } from "../types";

export class Clinic {
    constructor(private doctorList: Doctor[] = []) {}

    getPlan(patient: Patient) {
        let treatmentPlanId = patient.getTreatmentPlan().getId();

        if (treatmentPlanId === 1) {
            this.getDoctorByType(Doctors.SURGEON).treat();
        } else if (treatmentPlanId === 2) {
            this.getDoctorByType(Doctors.DENTIST).treat();
        } else {
            new Therapist("Ban", Doctors.THERAPIST).treat();
        }
    }

    public getDoctorList() {
        return this.doctorList;
    }

    public addDoctor(doctor: Doctor) {
        this.doctorList.push(doctor);
    }

    public addDoctors(...arr: Doctor[]) {
        arr.forEach((doctor) => this.doctorList.push(doctor));
    }

    public getDoctorByType(type: Doctors): Doctor {
        let doctor = this.doctorList.find((doctor) => {
            return doctor.getType() === type;
        });

        return doctor || new Therapist("Tomas", Doctors.THERAPIST);
    }
}
