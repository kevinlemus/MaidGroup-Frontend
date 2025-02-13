import { LocalDate } from "js-joda";
import { User } from "./user";
import { InvoiceItem } from "./invoiceinfo/invoice-item";

export interface Invoice {
    id: number,
    orderId: string,
    street: string,
    city: string,
    state: string,
    zipcode: number,
    date: LocalDate,
    firstName: string,
    lastName: string,
    clientEmail: string,
    phoneNumber: string
    totalPrice: number,
    status: PaymentStatus;
    user: User,
    items: InvoiceItem[],
    sent: boolean
}


export enum PaymentStatus {
    Failed = "FAILED",
    Paid = "PAID",
    Unpaid = "UNPAID"
}