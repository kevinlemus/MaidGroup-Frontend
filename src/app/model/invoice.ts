import { LocalDate } from "js-joda";

export interface Invoice {
    id: number,
    serviceName: string[],
    price: number[],
    date: LocalDate,
    firstName: string,
    lastName: string,
    clientEmail: string,
    phoneNumber: string
}
