import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/model/invoice';
import { InvoiceService } from 'src/app/services/invoice.service';
import { PageEvent } from '@angular/material/paginator';

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
  pageEvent: PageEvent = new PageEvent();
  pageSize = 20; // default page size
  page = 1; // default current page

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.findInvoices();
    this.loadDummyUsers();
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
}
