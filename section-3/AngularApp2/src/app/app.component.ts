import { Component } from '@angular/core';

@Component({
  // selector: 'app-root',
  // selector: '.app-root',
  // selector: '[app-root]',
  selector: 'div[app=app1]',
  // templateUrl: './app.component.html',
  template: `<h1>Welcome to Angular</h1>
    <h2>Welcome to Angular</h2>
    <h3>Welcome to Angular</h3>`,

  // styleUrls: ['./app.component.css']
  styles: [
    `
      h1 {
        color: brown;
        text-align: center;
      }
      h2 {
        color: royalblue;
        text-align: center;
      }
      h3 {
        color: red;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent {
  title = 'AngularApp2';
}
