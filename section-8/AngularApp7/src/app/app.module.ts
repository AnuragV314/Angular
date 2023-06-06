import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { DemoComponent } from './demo.component';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { StudentComponent } from './student/student.component';
import { CustomerComponent } from './customer/customer.component';
import { TestComponent } from './test/test.component';
import { Demo1Component } from './demo1/demo1.component';
import { TextDirective } from './text.directive';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    EmployeesComponent,
    StudentComponent,
    CustomerComponent,
    TestComponent,
    Demo1Component,
    TextDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
