import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-six-test';
}

class Person {
  name: String;
  hidden: Boolean;

  constructor(name: String) {
    this.name = name;
    this.hidden = true;
  }

  toggle() {
    this.hidden = !this.hidden;
  }
}

@Component({
  selector: 'people-list',
  template: `
  <ol>
    <person *ngFor="let p of people" [person]="p">
    </person>
  </ol>
  `
})
export class PeopleListComponent {
  people: Person[];

  constructor() {
    this.people = [
       new Person("Osman"),
       new Person("Bodrul"),
       new Person("Rizvi"),
       new Person("Nayeem"),
       new Person("Rabiul") 
    ]
  }
}

@Component({
  selector: 'person',
  template: `
    <li>
      <a [hidden]="!person.hidden" (click)="person.toggle()" style="color: blue">Show</a>
      <span [hidden]="person.hidden" (click)="person.toggle()">{{ person.name }}</span>
    </li>
  `
})
export class PersonComponent {
  @Input('person') person: Person;
}
