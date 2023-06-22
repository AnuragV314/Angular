import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h3>Username: <input [(ngModel)]="username"/></h3>
  <button (click)="toggle()">Show/Hide</button>
  <simple *ngIf="displayChild" [simpleInput]="username"></simple>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {
    console.log('App-Component constructer Executed!');
  }

  ngOnInit(): void {
    console.log('AppComponent ngOnInit() Life cycle Hook Executed')
  }

  username !: string;


  displayChild: boolean = true;
  toggle = () =>{
    this.displayChild = !this.displayChild;
  }


}
