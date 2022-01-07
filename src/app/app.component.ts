import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  memberName = 'MR SK SIR';

  addLanguage() {
    console.log('addLanguage() called');
  }
}
