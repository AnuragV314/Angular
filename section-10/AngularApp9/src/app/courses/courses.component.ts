import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';
import { ICourse } from '../icourse';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  courses!:ICourse[];

  constructor(private coursesServices: CoursesService) {}

  ngOnInit(): void {
    // this.courses = this.coursesServices.getAllCourses();
    this.coursesServices.getAllCourses().subscribe(data=>{
      this.courses = data;
    })
  }

}
