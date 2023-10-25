import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Posts } from './posts';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FreeapiService {

  constructor(private httpClient:HttpClient) { }

  putPost(post:Posts):Observable<Posts>{
    const url = 'https://jsonplaceholder.typicode.com/posts/2';
    return this.httpClient.put<Posts>(url,post);
    
  }

  patchPost(post:Posts):Observable<Posts>{
    const url = 'https://jsonplaceholder.typicode.com/posts/2';
    return this.httpClient.patch<Posts>(url,post);
    
  }

  deletePostById(){
    const url = 'https://jsonplaceholder.typicode.com/posts/2';
    return this.httpClient.delete(url);
    
  }
}
