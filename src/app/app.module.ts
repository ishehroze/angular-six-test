import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, LoopComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [LoopComponent]
})
export class AppModule { }
