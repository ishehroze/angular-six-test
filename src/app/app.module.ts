import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, PeopleListComponent, PersonComponent, PersonFormComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PersonComponent,
    PersonFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
