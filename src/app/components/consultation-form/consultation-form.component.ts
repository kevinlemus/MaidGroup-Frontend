import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultation-form',
  templateUrl: './consultation-form.component.html',
  styleUrls: ['./consultation-form.component.css']
})
export class ConsultationFormComponent implements OnInit {

  times: string[] = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];
  selectedTimes: {[date: string]: string[]} = {}; // Keep track of the selected times for each day
  disableSelect = false; // Add this line to define the disableSelect property

  isTimeUnavailable(time: string): boolean {
    if (this.selected) {
      const date = this.selected.toLocaleDateString(); // Get the selected date as a string
      return this.selectedTimes[date]?.includes(time) ?? false; // Check if the time has already been selected for this date
    }
    return false;
  }
  
  selectTime(time: string): void {
    if (this.selected) {
      const date = this.selected.toLocaleDateString(); // Get the selected date as a string
      if (!this.selectedTimes[date]) {
        this.selectedTimes[date] = []; // Initialize the array if it doesn't exist yet
      }
      this.selectedTimes[date].push(time); // Add the selected time to the array
  
      // Disable the select input when there are no more available times
      this.disableSelect = this.selectedTimes[date].length >= this.times.length;
    }
  }
  
  

  cancelConsultation(date: string, time: string): void {
    const index = this.selectedTimes[date]?.indexOf(time); // Find the index of the time in the array
    if (index !== undefined && index !== -1) {
      this.selectedTimes[date].splice(index, 1); // Remove the time from the array
    }
  }

  selected!: Date | null;
  constructor() { }

  ngOnInit(): void {
  }

}
