import { Student } from "./staff/Student";
import { Employee } from "./staff/Employee";
import { Dormitory } from "./staff/Dormitory";

export class College {
    constructor(
        private studentList: Student[],
        private employeeList: Employee[],
        private dormitoryList: Dormitory[]
    ) {}

    public menu() {
        let choice: string | null;

        do {
            choice = prompt(
                "Choose option:" +
                    "1) Add student to the university" +
                    "2) Add employee to the university" +
                    "3) Show all university students" +
                    "4) Show all university employees" +
                    "5) Exit."
            );

            switch (choice) {
                case "1":
                    console.log("1");
                case "2":
                    console.log("2");
                case "3":
                    console.log("3");
                case "4":
                    console.log("4");
                case "5":
                    console.log("Bye-Bye");
            }
        } while (choice != "5");
    }

    public addStudentToUniversity() {}

    public createStudent() {
        let firstName = prompt("Provide firstName");
        let lastName = prompt("Provide lastName");
        let groupNumber = prompt("Provide groupNumber");
        let address = prompt("Provide address");

        return new Student(firstName, lastName, groupNumber, address);
    }
}
