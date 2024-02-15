import { Clinic } from "./system/Clinic";
import { Patient } from "./system/Patient";
import { TreatmentPlan } from "./system/TreatmentPlan";
import { Surgeon } from "./staff/Surgeon";
import { Dentist } from "./staff/Dantist";
import { Therapist } from "./staff/Therapist";
import { Doctors } from "./types";

let patientOne = new Patient(new TreatmentPlan(1));
let patienttwo = new Patient(new TreatmentPlan(2));
let patientThree = new Patient(new TreatmentPlan(3));

let dantist = new Dentist("Dan", Doctors.DENTIST);
let therapist = new Therapist("Mark", Doctors.THERAPIST);
let surgeon = new Surgeon("Daniel", Doctors.SURGEON);

let clinic = new Clinic();

clinic.addDoctors(dantist, therapist, surgeon);

clinic.getPlan(patientOne);
clinic.getPlan(patienttwo);
clinic.getPlan(patientThree);
