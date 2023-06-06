import { Component } from '@angular/core';

import { ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-courcedetails',
  templateUrl: './courcedetails.component.html',
  styleUrls: ['./courcedetails.component.css'],
})
export class CourcedetailsComponent {
  cid!: number;

  constructor(private router: ActivatedRoute, private route:Router) {}

  ngOnInit() {
    // this.cid = this.router.snapshot.params['cid'];
    this.router.paramMap.subscribe((params:ParamMap)=>{
      this.cid = parseInt(this.router.snapshot.params['cid']);
    })
  }

  goPrevious() {
    let id = this.cid - 1;
    this.route.navigate(["courcesdetails", id])
  }

  goNext() {
    let id = this.cid + 1;
    this.route.navigate(["courcesdetails", id])
  }
}



