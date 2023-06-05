import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
  <h1>{{title1 | lowercase}}</h1>
  <h1>{{title2 | uppercase}}</h1>
  <h1>{{title3 | titlecase}}</h1>
  <h1>{{title3 | slice:10}}</h1>
  <h1>{{title3 | slice:10:13}}</h1>

  <h1>{{employee | json}}</h1>

  <h1>{{0.34 | percent}}</h1>

  <h1>{{3.1234 | number:'1.2-4'}}</h1>
  <h1>{{3.1234 | number:'2.2-4'}}</h1>
  <h1>{{3.1234 | number:'4.2-3'}}</h1>
  <h1>{{3.1234 | number:'2.1-2'}}</h1>

  <h1> Product Price: {{price | currency }}</h1>
  <h1> Product Price: {{price | currency: 'INR'}}</h1>
  <h1> Product Price: {{price | currency: 'EUR':'code'}}</h1>
  <h1> Product Price: {{price | currency: 'GBP'}}</h1>

  <h1>{{d1}}</h1>
  <h1>{{d1 | date}}</h1>

  <h1 style="color:blue">Short Representation</h1>
  <h1>{{d1 | date:'short'}}</h1>
  <h1>{{d1 | date:'shortDate'}}</h1>
  <h1>{{d1 | date:'shortTime'}}</h1>

  <h1 style="color:blue">Medium Representation</h1>
  <h1>{{d1 | date:'medium'}}</h1>
  <h1>{{d1 | date:'mediumDate'}}</h1>
  <h1>{{d1 | date:'mediumTime'}}</h1>

  <h1 style="color:blue">Long Representation</h1>
  <h1>{{d1 | date:'long'}}</h1>
  <h1>{{d1 | date:'longDate'}}</h1>
  <h1>{{d1 | date:'longTime'}}</h1>
  <h1></h1>

  `,
  styles: []
})


export class AppComponent {
  public d1 = new Date();
  public title1 = 'Welcome to Angular';
  public title2 = 'Welcome to Node.js';
  public title3 = 'Welcome to Python';

  employee={
    'eid':1,
    'ename':'Anurag',
    'ecity':'Lucknow'
  }

  public price = 34.455;

}
