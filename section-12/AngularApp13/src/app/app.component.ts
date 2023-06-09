import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { RegistrationServise } from './registration.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb: FormBuilder, private registrationService:RegistrationServise) { }

  registrationForm!: FormGroup;


  get email() {
    return this.registrationForm.get('email');
  }

  get alternateEmail() {
    return this.registrationForm.get('alternateEmail') as FormArray;
  }

  addAlternatEmail() {
    this.alternateEmail.push(this.fb.control(''));
    }


  ngOnInit() {
    this.registrationForm = this.fb.group({
      username: [''],
      email: [''],
      alternateEmail: this.fb.array([]),
      subscribe: [false],
      password: [''],
      confirmpassword: [''],
    });

    this.registrationForm.get('subscribe')?.valueChanges.
      subscribe(checkedvalue => {
        const email = this.registrationForm.get('email');
        if (checkedvalue) {
          email?.setValidators(Validators.required);
        }
        else {
          email?.clearValidators();
        }
        email?.updateValueAndValidity();
      })
  }


  submitFromData=()=>{
    // alert("Form Submitted");
    // console.log(this.registrationForm.value);
   this.registrationService.sendRegistration(this.registrationForm.value).subscribe(response=>{
    console.log(response);
   },
   error =>{
    console.log('Error')
   }
   )
  }



}
