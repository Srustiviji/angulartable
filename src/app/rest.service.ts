import { Injectable } from '@angular/core';


import{ HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
 
  url:string="http://localhost:3000/users";
  users: any;

  constructor(private http:HttpClient) { }

  

 

  getusers(data:any){
    return this.http.get(this.url,data);
  }

  saveUser(data:any){
    return this.http.post(this.url,data);
  }
}
