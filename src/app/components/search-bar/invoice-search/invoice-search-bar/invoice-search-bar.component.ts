import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-invoice-search-bar',
  templateUrl: './invoice-search-bar.component.html',
  styleUrls: ['./invoice-search-bar.component.css']
})
export class InvoiceSearchBarComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Invoice 1', 'Invoice 2', 'Invoice 3'];
  filteredOptions: Observable<string[]>;
  colorControl = new FormControl('primary' as ThemePalette);

  emailControl = new FormControl();
  emails: string[] = ['test1@example.com', 'test2@example.com', 'test3@example.com']; // Replace with your emails
  selectedEmails: string[] = [];
  filteredEmails: Observable<string[]> = of([]);

  nameControl = new FormControl();
  names: string[] = ['John Doe', 'Jane Doe', 'John Smith']; // Replace with your names
  selectedNames: string[] = [];
  filteredNames: Observable<string[]> = of([]);

  paymentStatusControl = new FormControl(); // Added form control
  keywordControl = new FormControl(); // Added form control

  constructor() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  ngOnInit() {
    this.filteredEmails = this.emailControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterEmails(value))
    );

    this.filteredNames = this.nameControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterNames(value))
    );

    this.filteredOptions = this.keywordControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterEmails(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.emails.filter(email => email.toLowerCase().includes(filterValue));
  }

  private _filterNames(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.names.filter(name => name.toLowerCase().includes(filterValue));
  }

  isSelected(email: string): boolean {
    return this.selectedEmails.includes(email);
  }

  toggleSelection(email: string): void {
    const index = this.selectedEmails.indexOf(email);
    if (index >= 0) {
      this.selectedEmails.splice(index, 1);
    } else {
      this.selectedEmails.push(email);
    }
  }

  isNameSelected(name: string): boolean {
    return this.selectedNames.includes(name);
  }

  toggleNameSelection(name: string): void {
    const index = this.selectedNames.indexOf(name);
    if (index >= 0) {
      this.selectedNames.splice(index, 1);
    } else {
      this.selectedNames.push(name);
    }
  }
}
