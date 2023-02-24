import { Component } from '@angular/core';

@Component({
  selector: 'ea-academy-library-logo',
  templateUrl: './academy-library-logo.component.html',
  styleUrls: ['./academy-library-logo.component.css']
})
export class AcademyLibraryLogoComponent {
  logo: string;

  constructor() {
    this.logo = 'Acadmy Library';
  }
}
