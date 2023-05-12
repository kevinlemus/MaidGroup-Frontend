import { MatAccordion } from '@angular/material/expansion';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Invoice } from 'src/app/model/invoice';
import { User } from 'src/app/model/user';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  @Input()
  user!: User;

  @Input()
  invoice!: Invoice;

  @ViewChild(MatAccordion)
  accordion!: MatAccordion;

  getInvoiceDate(): string {
    const date = new Date(this.invoice.date.toString());
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }

  constructor() {

  }

  ngOnInit(): void {
  }
}
