import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FreeapiService } from './freeapi.service';
import { Posts } from './posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calling External API In Angular-8 using PUT, PATCH, DELETE Http Request Methods';
  

  constructor(private freeApiService: FreeapiService) { }

  putPost: Posts | undefined;
  patchPost: Posts | undefined;
  message: string|undefined;



  ngOnInit() {

    // PUT
    let putPost1 = new Posts()
    putPost1.id=2;
    putPost1.userId = 1;
    putPost1.title = "New Post";
    putPost1.body = "new put body";

    this.freeApiService.putPost(putPost1).subscribe(data => {
      this.putPost = data;
    });

    // PATCH
    let patchPost1 = new Posts()
    patchPost1.title = "New Post";
    patchPost1.body = "new Patch body";

    this.freeApiService.patchPost(patchPost1).subscribe(data=>{
      this.patchPost = data;
    });

    // DELETE
    this.freeApiService.deletePostById().subscribe(data=>{
      this.message = 'Resource with Id-2 Deleted Successfully!!!';
    });

  }
}
