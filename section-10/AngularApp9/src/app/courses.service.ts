import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ICourse } from './icourse';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private _http:HttpClient) { }


  _url="/assets/data/courses.json"

  getAllCourses():Observable<ICourse[]>{
    return this._http.get<ICourse[]>(this._url);
  }
}
