import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})

export class RegistrationComponent {

  constructor(private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    username: ['Anurag'],
    password: [123],
    confirmpassword: [123],
    address: this.fb.group({
      city: ["as"],
      state: ["ab"],
      pincode: [1234]
    })
  })


  // registrationForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmpassword: new FormControl(''),

  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     pincode: new FormControl(''),
  //   }),
  // });


  // loadApiData = () => {
  //   // alert('Api laded');
  //   this.registrationForm.setValue({
  //     username: "Anurag",
  //     password: "shanu",
  //     confirmpassword: "shanu",
  //     address: {
  //       city: "Jaunpur",
  //       state: "Utter Pradesh",
  //       pincode: "222222",
  //     }
  //   })
  // };

  // loadApiData = () => {
  //   this.registrationForm.patchValue({
  //     username: "Anurag",
  //     password: "shanu",
  //     confirmpassword: "shanu",
  //   })
  // };



}
