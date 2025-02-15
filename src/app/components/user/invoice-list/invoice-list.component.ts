import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/model/invoice';
import { InvoiceService } from 'src/app/services/invoice.service';
import { PageEvent } from '@angular/material/paginator';
import { Consultation, PreferredContact, ConsultationStatus } from 'src/app/model/consultation';

interface User {
  profilePic: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
}

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  invoices: Invoice[] = [];
  users: User[] = [];
  consultations: Consultation[] = [];
  pageEvent: PageEvent = new PageEvent();
  pageSize = 20; // default page size
  page = 1; // default current page

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.findInvoices();
    this.loadDummyUsers();
    this.loadDummyConsultations();
  }

  findInvoices() {
    this.invoiceService.findAllInvoices().subscribe({
      next: (data) => {
        this.invoices = data as Invoice[];
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  loadDummyUsers() {
    this.users = [
      { profilePic: '', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', gender: 'Male' },
      { profilePic: '', firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', gender: 'Female' },
      { profilePic: '', firstName: 'Michael', lastName: 'Brown', email: 'michael.brown@example.com', gender: 'Male' },
      { profilePic: '', firstName: 'Emily', lastName: 'Johnson', email: 'emily.johnson@example.com', gender: 'Female' },
      { profilePic: '', firstName: 'Chris', lastName: 'Lee', email: 'chris.lee@example.com', gender: 'Male' },
      { profilePic: '', firstName: 'Amanda', lastName: 'Williams', email: 'amanda.williams@example.com', gender: 'Female' },
      { profilePic: '', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', gender: 'Male' },
      { profilePic: '', firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', gender: 'Female' },
      { profilePic: '', firstName: 'Michael', lastName: 'Brown', email: 'michael.brown@example.com', gender: 'Male' },
      { profilePic: '', firstName: 'Emily', lastName: 'Johnson', email: 'emily.johnson@example.com', gender: 'Female' },
      { profilePic: '', firstName: 'Chris', lastName: 'Lee', email: 'chris.lee@example.com', gender: 'Male' },
      { profilePic: '', firstName: 'Amanda', lastName: 'Williams', email: 'amanda.williams@example.com', gender: 'Female' },
      { profilePic: '', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', gender: 'Male' },
      { profilePic: '', firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', gender: 'Female' },
      { profilePic: '', firstName: 'Michael', lastName: 'Brown', email: 'michael.brown@example.com', gender: 'Male' },
      { profilePic: '', firstName: 'Emily', lastName: 'Johnson', email: 'emily.johnson@example.com', gender: 'Female' },
      { profilePic: '', firstName: 'Chris', lastName: 'Lee', email: 'chris.lee@example.com', gender: 'Male' },
      { profilePic: '', firstName: 'Amanda', lastName: 'Williams', email: 'amanda.williams@example.com', gender: 'Female' },
      { profilePic: '', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', gender: 'Male' },
      { profilePic: '', firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', gender: 'Female' },
      { profilePic: '', firstName: 'Michael', lastName: 'Brown', email: 'michael.brown@example.com', gender: 'Male' },
      { profilePic: '', firstName: 'Emily', lastName: 'Johnson', email: 'emily.johnson@example.com', gender: 'Female' },
      { profilePic: '', firstName: 'Chris', lastName: 'Lee', email: 'chris.lee@example.com', gender: 'Male' },
      { profilePic: '', firstName: 'Amanda', lastName: 'Williams', email: 'amanda.williams@example.com', gender: 'Female' },
    ];
  }

  loadDummyConsultations() {
    this.consultations = [
        {
            id: 1, firstName: 'Alice', lastName: 'Brown', email: 'alice.brown@example.com',
            phoneNumber: '123-456-7890', message: 'Looking for consultation on financial planning',
            date: '2025-02-15', time: '10:30', preferredContact: PreferredContact.EMAIL, status: ConsultationStatus.PENDING, uniqueLink: 'http://example.com/consult/1'
        },
        {
            id: 2, firstName: 'Bob', lastName: 'Smith', email: 'bob.smith@example.com',
            phoneNumber: '098-765-4321', message: 'Need advice on real estate investment',
            date: '2025-02-16', time: '14:00', preferredContact: PreferredContact.PHONE, status: ConsultationStatus.CONFIRMED, uniqueLink: 'http://example.com/consult/2'
        },
        {
            id: 3, firstName: 'Carol', lastName: 'Johnson', email: 'carol.johnson@example.com',
            phoneNumber: '111-222-3333', message: 'Advice on career development',
            date: '2025-03-01', time: '09:00', preferredContact: PreferredContact.EMAIL, status: ConsultationStatus.CANCELLED, uniqueLink: 'http://example.com/consult/3'
        },
        {
            id: 4, firstName: 'David', lastName: 'Lee', email: 'david.lee@example.com',
            phoneNumber: '444-555-6666', message: 'Consultation on legal matters',
            date: '2025-03-05', time: '13:30', preferredContact: PreferredContact.PHONE, status: ConsultationStatus.PENDING, uniqueLink: 'http://example.com/consult/4'
        },
        {
            id: 5, firstName: 'Emma', lastName: 'Davis', email: 'emma.davis@example.com',
            phoneNumber: '222-333-4444', message: 'Need help with project management',
            date: '2025-03-10', time: '11:00', preferredContact: PreferredContact.EMAIL, status: ConsultationStatus.CONFIRMED, uniqueLink: 'http://example.com/consult/5'
        },
        {
            id: 6, firstName: 'Frank', lastName: 'Wilson', email: 'frank.wilson@example.com',
            phoneNumber: '333-444-5555', message: 'Consultation for marketing strategy',
            date: '2025-03-12', time: '15:00', preferredContact: PreferredContact.PHONE, status: ConsultationStatus.CANCELLED, uniqueLink: 'http://example.com/consult/6'
        },
        {
            id: 7, firstName: 'Grace', lastName: 'Martinez', email: 'grace.martinez@example.com',
            phoneNumber: '555-666-7777', message: 'Financial advice for retirement planning',
            date: '2025-03-15', time: '10:00', preferredContact: PreferredContact.EMAIL, status: ConsultationStatus.PENDING, uniqueLink: 'http://example.com/consult/7'
        },
        {
            id: 8, firstName: 'Henry', lastName: 'Anderson', email: 'henry.anderson@example.com',
            phoneNumber: '666-777-8888', message: 'Legal consultation for business setup',
            date: '2025-03-20', time: '14:30', preferredContact: PreferredContact.PHONE, status: ConsultationStatus.CONFIRMED, uniqueLink: 'http://example.com/consult/8'
        },
        {
            id: 9, firstName: 'Ivy', lastName: 'Thomas', email: 'ivy.thomas@example.com',
            phoneNumber: '777-888-9999', message: 'Advice on educational courses',
            date: '2025-03-25', time: '09:30', preferredContact: PreferredContact.EMAIL, status: ConsultationStatus.CANCELLED, uniqueLink: 'http://example.com/consult/9'
        },
        {
            id: 10, firstName: 'Jack', lastName: 'Taylor', email: 'jack.taylor@example.com',
            phoneNumber: '888-999-0000', message: 'Consultation on tax planning',
            date: '2025-03-30', time: '13:00', preferredContact: PreferredContact.PHONE, status: ConsultationStatus.PENDING, uniqueLink: 'http://example.com/consult/10'
        }
    ];
}

  
}
