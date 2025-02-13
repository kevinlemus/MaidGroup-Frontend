import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-user-search-bar',
  templateUrl: './user-search-bar.component.html',
  styleUrls: ['./user-search-bar.component.css']
})
export class UserSearchBarComponent implements OnInit {
  nameControl = new FormControl();
  emailControl = new FormControl();
  genderControl = new FormControl();
  keywordControl = new FormControl();

  names: string[] = ['John Doe', 'Jane Doe', 'John Smith'];
  emails: string[] = ['test1@example.com', 'test2@example.com', 'test3@example.com'];
  filteredNames: Observable<string[]> = of([]);
  filteredEmails: Observable<string[]> = of([]);
  filteredOptions: Observable<string[]> = of([]);
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

    this.filteredOptions = this.keywordControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
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

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return [...this.names, ...this.emails].filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  onSearch() {
    const firstName = this.nameControl.value;
    const email = this.emailControl.value;
    const gender = this.genderControl.value;

    // For visualization purposes, just log the search parameters
    console.log('Search parameters:', { firstName, email, gender });
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
