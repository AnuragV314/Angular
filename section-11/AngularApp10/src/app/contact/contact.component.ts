import { Component } from '@angular/core';
import { Enquiry } from '../enquiry';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  courses = [
    'Java',
    'Python',
    'TypeScript',
    'JavaScript',
    'MongoDB',
    'Express.js',
    'Angular',
    'Node.js',
  ];

  enquiry1 = new Enquiry('', '', 0, 'default', '', '');

  hasGenderError!: boolean;
 
  validateGender(gender: any) {
    if ((gender == 'default')) {
      this.hasGenderError = true;
    } else {
      this.hasGenderError = false;
    }
  }


  hasCourseError!: boolean;
  validateCourse(course:any){
    if ((course == 'default')) {
      this.hasCourseError = true;
    } else {
      this.hasCourseError = false;
    }
  }


  hasTrainingModeError!: boolean;

  validateTrainingMode(trainingmode:any){
    if ((trainingmode == 'default')) {
      this.hasTrainingModeError = true;
    } else {
      this.hasTrainingModeError = false;
    }
  }
}
