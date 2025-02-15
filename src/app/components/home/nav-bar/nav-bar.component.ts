// nav-bar.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const servicesButton = document.querySelector('.services-button');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownContent?.addEventListener('mouseenter', () => {
      servicesButton?.classList.add('hover');
    });

    dropdownContent?.addEventListener('mouseleave', () => {
      servicesButton?.classList.remove('hover');
    });
  }
}
