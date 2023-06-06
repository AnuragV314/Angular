import { Component } from '@angular/core';
import {Employee} from './employee'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Directives';

  // public username: string = 'root';
  // public password: string = 'root';

  // public colors = ['Red', 'Black', 'Green', 'Orange'];

  // public employees = [
  //   {
  //     eid: 101,
  //     ename: 'Anurag',
  //     esalary: 50000,
  //     ecity: 'Lucknow',
  //   },
  //   {
  //     eid: 102,
  //     ename: 'Shanu',
  //     esalary: 55000,
  //     ecity: 'Jaunpur',
  //   },
  //   {
  //     eid: 103,
  //     ename: 'Python',
  //     esalary: 60000,
  //     ecity: 'Noida',
  //   },
  // ];

  // or 
  public employees:Employee[]=[
       {
      eid: 101,
      ename: 'Anurag',
      esalary: 50000,
      ecity: 'Lucknow',
    },
    {
      eid: 102,
      ename: 'Shanu',
      esalary: 55000,
      ecity: 'Jaunpur',
    },
    {
      eid: 103,
      ename: 'Python',
      esalary: 60000,
      ecity: 'Noida',
    }
  ]


public name:string='Anurag';
public technology:string = 'TypeScript';


public username:string='admin';
public countries:Array<string> = ['India', 'Australia', 'England', 'Ireland'];

public country:string='';


public hasError:boolean=false;

myClasses={
  "text-success1": this.hasError,
  "text-special1": !this.hasError,
  "text-danger1": !this.hasError
}

myStyle={
  "color":'cyan',
  "font-style":'italic',
  "text-transform":"uppercase"
  
}

}
