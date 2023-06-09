import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  // Interpolation {{}}

  title = 'Welcome to Angular';

  // Property Binding [] 

  imageUrl = "./assets/images/Mustang.jpg"


  // Event Binding ()
  count: number = 0;
  incrementCount() {
    this.count += 1;
  }

  // Two-Way Binding
  // Two-Way Binding split

  fname!: string;
  lname!: string;


  greet(event: any) { // event is parameter you can use other name also.
    this.lname = event;

    if (event == 'Verma') {
      alert(`Welcome back ${this.fname}!`);
    }
  }


  // Getters and Setters

  private _email !: string;

  set email(value: string) {
    this._email = value;
    if (value == 'anurag@gmail.com') {
      alert(value + ' ' + 'Email is not allowed.')
    }
  }

  get email() {
    return this._email;
  }



  // ViewChild()

  @ViewChild('cityRef')
  cityElementRef !: ElementRef;

  ngAfterViewInit(): void {
    this.cityElementRef.nativeElement.focus();
    console.log(this.cityElementRef);
  }


}

