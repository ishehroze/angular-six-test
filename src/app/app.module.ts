import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, PeopleListComponent, PersonComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
