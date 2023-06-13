import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './component/child.component';
import { InteractionService } from './interaction.service';
 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // title = '';


  // @ViewChild(ChildComponent)
  // childComponentRef !: ChildComponent

  // ngAfterViewInit() {

  //   this.title = this.childComponentRef.username;
  // }


  // greet(value: any){
  //   // alert("Message from parent component");
  //   alert(value);
  // }


constructor(private interactionService:InteractionService){}

greedEmployee(){
  this.interactionService.sendMessage('Good Evening');
}

appreciateEmployee(){
  this.interactionService.sendMessage('Congratulation! Anurag Verma is the best emoloyee of the year.');
}

}
