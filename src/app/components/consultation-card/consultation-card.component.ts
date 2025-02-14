import { Component, Input } from '@angular/core';
import { Consultation } from '../models/consultation.model';

@Component({
  selector: 'app-consultation-card',
  templateUrl: './consultation-card.component.html',
  styleUrls: ['./consultation-card.component.css']
})
export class ConsultationCardComponent {
  @Input() consultation: Consultation;
}
