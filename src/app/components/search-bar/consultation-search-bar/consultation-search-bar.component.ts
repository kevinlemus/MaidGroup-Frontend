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
  filteredNames: Observable<string[]> = of([]);
  emailControl = new FormControl();
  filteredEmails: Observable<string[]> = of([]);
  dateControl = new FormControl();
  preferredContactControl = new FormControl();
  statusControl = new FormControl();

  names: string[] = ['John Doe', 'Jane Doe', 'John Smith']; // Replace with your names
  selectedNames: string[] = [];
  emails: string[] = ['test1@example.com', 'test2@example.com', 'test3@example.com']; // Replace with your emails
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

  isEmailSelected(email: string): boolean {
    return this.selectedEmails.includes(email);
  }

  toggleEmailSelection(email: string): void {
    const index = this.selectedEmails.indexOf(email);
    if (index >= 0) {
      this.selectedEmails.splice(index, 1);
    } else {
      this.selectedEmails.push(email);
    }
  }
}
