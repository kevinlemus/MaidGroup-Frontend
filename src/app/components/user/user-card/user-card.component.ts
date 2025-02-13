import { Component, Input } from '@angular/core';

interface User {
  profilePic: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
}

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user!: User;
}
