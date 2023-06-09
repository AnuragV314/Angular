import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"

@Injectable()
export class RegistrationServise{


    constructor(private http:HttpClient){}
    
    url = 'htpp://localhost:3000/enquiry';
    sendRegistration(registrationForm: any){
        return this.http.post<any>(this.url, registrationForm)
    }


}


