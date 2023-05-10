import { LocalDate } from "js-joda";

export interface Password {
    hashedPassword: string;
    dateLastUsed: LocalDate | null;
}
