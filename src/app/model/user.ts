import { LocalDate, LocalDateTime } from "js-joda";
import { Password } from "../security/password";
import { Consultation } from "./consultation";

export interface User {
    username: string;
    password: Password;
    confirmPassword: Password;
    previousPasswords: Password[];
    firstName: string;
    lastName: string;
    email: string;
    gender: Gender;
    dateOfBirth: LocalDate;
    role: Role;
    consultations: Consultation[];
    age: number;
}

export enum Gender{
    Male = "Male",
    Female = "Female",
    Other = "Other"
}

export enum Role{
    Admin = "ADMIN",
    Staff = "STAFF",
    Customer = "CUSTOMER"
}