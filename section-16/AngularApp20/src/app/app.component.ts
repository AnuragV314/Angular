import { Component } from '@angular/core';
import { FreeapiService } from './freeapi.service';
import { Posts } from '../app/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp20';

  allPosts: Posts[] | undefined;
  postById: Posts | undefined;
  postByRequest:Posts[]|undefined;
  postSend:Posts|undefined;

  constructor(private freeAPISevice: FreeapiService) { }

  ngOnInit() {
    this.freeAPISevice.getAllPosts().subscribe(data => {
      this.allPosts = data;
    });

    this.freeAPISevice.getPostById().subscribe(data => {
      this.postById = data;
    });

    this.freeAPISevice.getPostByRequest().subscribe(data=>{
      this.postByRequest = data;
    });


    let post1 = new Posts();
    post1.userId =101;
    post1.title = "lsdf dfdf sddss"
    post1.body = "hdfkj df hg hd f s  gfg s fsd f fg fd gf g f g"

    this.freeAPISevice.sendPost(post1).subscribe(data=>{
      this.postSend = data;
    });
  }
}



