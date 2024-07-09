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
    <li *ngFor="let person of people">
      <a [hidden]="!person.hidden" (click)="toggle(person)" style="color: blue">Show</a>
      <span [hidden]="person.hidden" (click)="toggle(person)">{{ person.name }}</span></li>
  </ol>
  `
})
export class LoopComponent {
  people: Object[];

  constructor() {
    this.people = [
      {"name": "Osman", "hidden": true},
      {"name": "Bodrul", "hidden": true},
      {"name": "Rizvi", "hidden": true},
      {"name": "Nayeem", "hidden": true},
      {"name": "Rabiul", "hidden": true}
    ]
  }

  toggle(person) {
    person.hidden = !person.hidden;
  }
}
