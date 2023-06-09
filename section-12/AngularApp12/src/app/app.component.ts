import { Component } from '@angular/core';
import { FormBuilder , Validators} from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { passwordValidator } from './shared/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb:FormBuilder) { }

  get username(){
    return this.registrationForm.get('username');
  }

registrationForm=this.fb.group({
  username:['', [Validators.required, Validators.minLength(5), Validators.maxLength(10), forbiddenNameValidator]],
  password:['', Validators.required],
  confirmpassword:['', Validators.required],
},
{validator:passwordValidator}
)

}
