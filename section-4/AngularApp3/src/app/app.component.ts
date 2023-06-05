import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  public title:string = 'Welcome to Angular';
  public message:string = 'Welcome Anurag Verma!';

  public d1 = new Date();

  public img_loc = "./assets/images/anurag.jpg";

  public a = 100;

  f1(){
    // console.log('Welcome to f1() method...');
    return 'Welcome to f1() method...';
  }

}
