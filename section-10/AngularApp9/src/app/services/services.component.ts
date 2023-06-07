import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';
import { ICourse } from '../icourse';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {

  //  courses:Array<any> = [];
  courses!:ICourse[];

  constructor(private _coursesServices: CoursesService) {}

  ngOnInit(): void {
    // this.courses = this._coursesServices.getAllCourses();
    this._coursesServices.getAllCourses().subscribe(data=>{
      this.courses = data;
    })
  }
}
