import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnuragComponent } from './anurag/anurag.component';
import { Anurag2Component } from './anurag2.component';

@NgModule({
  declarations: [
    AppComponent,
    AnuragComponent,
    Anurag2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
