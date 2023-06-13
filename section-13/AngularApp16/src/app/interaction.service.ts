import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class InteractionService{

    constructor(){}

    private managerMessageSource = new Subject<string>()

    managerMessage = this.managerMessageSource.asObservable();

    sendMessage(message:string){
        this.managerMessageSource.next(message);
    }
}