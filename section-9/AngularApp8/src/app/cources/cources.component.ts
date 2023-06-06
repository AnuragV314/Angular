import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css'],
})
export class CourcesComponent {
  constructor(private router: Router) {}

  cources = [
    { cid: 1, cname: 'Java14', trainer: 'Anurag' },
    { cid: 2, cname: 'Python', trainer: 'Shanu' },
    { cid: 3, cname: 'JavaScript', trainer: 'PythonSir' },
    { cid: 4, cname: 'NodeJs', trainer: 'JavaBhai' },
    { cid: 5, cname: 'Express', trainer: 'JsSir' },
  ];

  onSelect(cource: any) {
    // courcesdetails/:cid
    let cid = cource.cid;
    this.router.navigate(['courcesdetails', cid]);
  }

}
