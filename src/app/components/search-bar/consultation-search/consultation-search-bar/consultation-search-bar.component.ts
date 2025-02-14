import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-consultation-search-bar',
  templateUrl: './consultation-search-bar.component.html',
  styleUrls: ['./consultation-search-bar.component.css']
})
export class ConsultationSearchBarComponent implements OnInit {
  nameControl = new FormControl();
  emailControl = new FormControl();
  phoneControl = new FormControl();
  preferredContactControl = new FormControl();
  statusControl = new FormControl();
  dateControl = new FormControl();
  keywordControl = new FormControl();

  names: string[] = ['John Doe', 'Jane Doe', 'John Smith'];
  emails: string[] = ['test1@example.com', 'test2@example.com', 'test3@example.com'];
  filteredNames: Observable<string[]> = of([]);
  filteredEmails: Observable<string[]> = of([]);
  selectedNames: string[] = [];
  selectedEmails: string[] = [];

  ngOnInit() {
    this.filteredNames = this.nameControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterNames(value))
    );

    this.filteredEmails = this.emailControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterEmails(value))
    );
  }

  private _filterNames(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.names.filter(name => name.toLowerCase().includes(filterValue));
  }

  private _filterEmails(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.emails.filter(email => email.toLowerCase().includes(filterValue));
  }

  onSearch() {
    const firstName = this.nameControl.value;
    const email = this.emailControl.value;
    const phoneNumber = this.phoneControl.value;
    const preferredContact = this.preferredContactControl.value;
    const status = this.statusControl.value;
    const date = this.dateControl.value;

    // For visualization purposes, just log the search parameters
    console.log('Search parameters:', { firstName, email, phoneNumber, preferredContact, status, date });
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
