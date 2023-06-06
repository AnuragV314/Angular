import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContantComponent } from './contant/contant.component';
import { CourcesComponent } from './cources/cources.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { JavaComponent } from './java/java.component';
import { JavaScriptComponent } from './java-script/java-script.component';
import { PythonComponent } from './python/python.component';
import { ExpressComponent } from './express/express.component';
import { NodeJsComponent } from './node-js/node-js.component';
import { CourcedetailsComponent } from './courcedetails/courcedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContantComponent,
    CourcesComponent,
    PagenotfoundComponent,
    JavaComponent,
    JavaScriptComponent,
    PythonComponent,
    ExpressComponent,
    NodeJsComponent,
    CourcedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
