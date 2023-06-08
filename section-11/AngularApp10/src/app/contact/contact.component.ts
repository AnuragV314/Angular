import { Component } from '@angular/core';
import { Enquiry } from '../enquiry';

import {EnquiryService} from '../enquiry.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {


  constructor(private enquiryService:EnquiryService){}


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



isFormSubmited:boolean = true;

  submitForm = () =>{
    this.isFormSubmited = false;
    console.log(this.enquiry1);
    this.enquiryService.sendEnquiry(this.enquiry1).
    subscribe(data=>console.log("Data", data),
    error=>console.log("Error", error));
  }
}
