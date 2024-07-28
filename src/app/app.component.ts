import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  selector: 'person-form',
  template: `
  <input placeholder="Enter Name" #nameInput>
  <button type="button" (click)="createPerson(nameInput.value)">Save</button>;
  `
})
export class PersonFormComponent {
  @Output('personCreateEvent') personCreated = new EventEmitter<Person>();

  createPerson(name:string) {
    this.personCreated.emit(new Person(name));
  }
}

@Component({
  selector: 'people-list',
  template: `
  <person-form (personCreateEvent)="addPerson($event)"></person-form>
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

  addPerson(person:Person) {
    this.people.push(person);
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
