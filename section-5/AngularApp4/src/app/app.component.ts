import { Component } from '@angular/core';

@Component({
  selector: 'anurag',
  template: `
    <div class="container m-3">
      <!-- <h2 class="text-primary">{{ title }}</h2>
      <h2 class="text-danger">{{ title }}</h2>
      <h2 class="text-success">{{ title }}</h2>
      <h2 class="text-special">{{ title }}</h2> -->

      <!-- class binding -->

      <!-- <h3 [class]="successClass">{{ title }}</h3>

      <h3 [className]="dangerClass">{{ title }}</h3>

      <h3 [ngClass]="myclasses">{{ title }}</h3>

      <h2 [class.text-danger]="false">{{ title }}</h2>

      <h2 bind-class="successClass">Welcome to Python by Anurag</h2> -->

      <!-- style binding  -->

      <!-- <h2 [style.color]="'cyan'">{{ title }}</h2>

      <h2 [style.color]="successClass1">{{ title }}</h2>

      <h2 [style.background-color]="dangerClass1">{{ title }}</h2>

      <h2 [style.color]="hasError ? dangerClass1 : successClass1">
        {{ message }}
      </h2>

      <h2 [ngStyle]="myStyle">{{ title }}</h2>

      <h2 bind-style="myStyle">{{ title }}</h2> -->



      <!-- event binding  -->

      <!-- <h2>Username:<input #username/></h2> -->
      <!-- <button (click)="f1(username)">click</button> -->

      <button (click)="f1($event)">click</button>


    </div>
  `,

  styles: [
    `
      .text-danger {
        color: red;
      }
      .text-primary {
        color: blue;
      }
      .text-success {
        color: green;
      }

      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class AppComponent {
  title = 'Welcome to Angular';
  message = 'Welcome to Python by Anurag';

  successClass = 'text-success';
  successClass1 = 'green';
  dangerClass = 'text-danger';
  dangerClass1 = 'red';
  hasError = true;

  myclasses = {
    'text-success': true,
    'text-special': true,
  };


  myStyle = {
    color: 'green',
    'font-style': 'italic',
    'text-transform':'uppercase'
  };


  // f1(username: any){
  //   let d1 = new Date();
  //   // console.log(`click event executed : ${d1}`);
  //   console.log(`Welcome : ${username.value}`);
  //   console.log(`Welcome : ${username.value.toUpperCase()}`);
  //   console.log(typeof(username.value))
  // }

  f1(event: any){
    let d1 = new Date();
    console.log(`${event}`);
    console.log(event);
    console.log(event.type);
  }


}
