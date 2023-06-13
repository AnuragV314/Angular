import { Component, Output, EventEmitter } from '@angular/core'
import { InteractionService } from '../interaction.service';


@Component({
    selector: 'child',
    template: ` 
    
        <h1 style="color:red">Child Components</h1>
        <!-- <button (click)="callWishFromParent()" class="btn btn-warning">Wish</button> -->
    `,
})
export class ChildComponent {

    // username:string="Anurag Verma";

    // // greet(){
    // //     alert("Welcome to Angular Tutorial")
    // // }

    // @Output()
    // wishEvent=new EventEmitter(); 

    // callWishFromParent(){
    //     // alert("Sending a message from child component");

    //     this.wishEvent.emit("Welcome to Angular Tutorial");
    // }


    constructor(private interactionService: InteractionService) {

    }

    ngOnInit() {
        this.interactionService.managerMessage.
            subscribe((message: string) => {
                if (message == 'Good Evening') {
                    alert('Very Good Evening Boss');
                }
                else{
                    alert('Thank you very much from Anurag Verma.');
                }
            })
    }


}




