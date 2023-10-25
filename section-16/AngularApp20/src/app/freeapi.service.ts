import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Posts } from '../app/posts';

@Injectable({
  providedIn: 'root'
})
export class FreeapiService {

  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<Posts[]> {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.httpClient.get<Posts[]>(url);
  }

  getPostById(): Observable<Posts> {
    const url = 'https://jsonplaceholder.typicode.com/posts/2';
    return this.httpClient.get<Posts>(url);
  }

  // getPostByUserid
  getPostByRequest(): Observable<Posts[]> {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let param1 = new HttpParams().set("userId", "5")
    return this.httpClient.get<Posts[]>(url, { params: param1 });
  }


  sendPost(post: Posts): Observable<Posts> {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.httpClient.post<Posts>(url, post)
  }


}
