import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-six-test';
}

@Component({
  selector: 'app-root',
  template: `
  <ol>
    <li *ngFor="let name of names">{{ name }}</li>
  </ol>
  `
})
export class LoopComponent {
  names: String[];

  constructor() {
    this.names = [
      "Osman",
      "Bodrul",
      "Rizvi",
      "Nayeem",
      "Rabiul"
    ]
  }
}
