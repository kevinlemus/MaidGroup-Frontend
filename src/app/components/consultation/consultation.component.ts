import { Component, Input, OnInit } from '@angular/core';
import { Consultation } from 'src/app/model/consultation';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  @Input()
  consultation!: Consultation;

  consultationDate: Date;

  constructor() {
    this.consultationDate = new Date();
  }

  ngOnInit(): void {
    // Convert the date string to a JavaScript Date object
    this.consultationDate = new Date(this.consultation.date);
  }
}
