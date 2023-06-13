import { Component, Input, OnChanges, SimpleChanges } from "@angular/core"

@Component({
    selector: 'child',
    template: `
        <h2 style="color:red">Child Component :</h2>
        <h1>{{message}}</h1>`

    // <h3 *ngIf="loggedIn">Welcome Back <p style="display: inline; color: red;">{{username}}</p></h3>
    //  <h3 *ngIf="!loggedIn">Please Login</h3>

})


export class ChildComponent implements OnChanges {

    username: string = 'Anurag Verma';
    message!: string;

    // Input Decoretor===>

    // @Input()
    // loggedIn !:boolean; 



    // Getter and setter method ===>

    // private _loggedIn !:boolean; 

    // @Input()
    // set loggedIn(value:boolean){
    //     this._loggedIn = value;
    //     if(value==true){
    //         this.message = 'Welcome Back, ' + this.username;
    //     }
    //     else{
    //         this.message = 'Please LogIn';
    //     }
    // }

    // get loggedIn(){
    //     return this._loggedIn;

    // }



    //  ngOnChanges ===>

    @Input()
    loggedIn !: boolean;

    ngOnChanges(changes: SimpleChanges): void {
        // console.log(changes);
        // console.log(typeof (changes));

        let currentValue = changes['loggedIn'];
        if (currentValue.currentValue) {
            this.message = 'Welcome Back, ' + this.username;
        }
        else {
            this.message = 'Please LogIn';
        }
    }



}