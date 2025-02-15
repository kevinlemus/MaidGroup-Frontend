// consultation.ts (Your model file)
export interface Consultation {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
    date: string; // Use string here, and convert to Date in the component
    time: string;
    preferredContact: PreferredContact;
    status: ConsultationStatus;
    uniqueLink: string;
  }
  
  export enum PreferredContact {
    EMAIL = 'EMAIL',
    PHONE = 'PHONE'
  }
  
  export enum ConsultationStatus {
    PENDING = 'PENDING',
    CONFIRMED = 'CONFIRMED',
    CANCELLED = 'CANCELLED'
  }
  