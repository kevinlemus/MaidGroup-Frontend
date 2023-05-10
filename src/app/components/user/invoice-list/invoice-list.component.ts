import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/model/invoice';
import { InvoiceService } from 'src/app/services/invoice.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  invoices:Invoice[] = [];

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
  }

  findInvoices(){
    this.invoiceService.findAllInvoices().subscribe({
      next: (data) => {
        this.invoices = data as Invoice[];

      },
      error: (error) => {
        console.error(error);
      }
    })
  }

}
