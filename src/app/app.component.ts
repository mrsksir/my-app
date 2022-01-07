import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  language: string = '';
  listOfLanguage: string[] = ['English', 'Nepali'];

  // Add language at the end
  addLanguage() {
    this.listOfLanguage.push(this.language);
  }

  // Delete First Lang. from the list
  deleteFirst() {
    this.listOfLanguage.splice(0, 1);
  }
}
