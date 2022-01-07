import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  language: string = 'Nepali';
  listOfLanguage: string[] = ['english', 'Nepali'];

  addLanguage() {
    this.listOfLanguage.push(this.language);
    console.log(this.listOfLanguage);
  }
}
