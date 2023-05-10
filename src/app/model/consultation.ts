import { LocalDate, LocalTime } from 'js-joda';

export interface Consultation {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
    date: LocalDate;
    time: LocalTime;
}

