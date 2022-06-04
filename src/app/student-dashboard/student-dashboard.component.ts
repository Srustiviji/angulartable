import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent  {
   users:any;
  constructor(private rs:RestService) {
    this.rs.users().subscribe((data:any)=>{
      this.users=data;
    });
   }

   getUserFormData(data:any){
    console.log(data);
    this.rs.saveUser(data).subscribe((result)=>{
      console.log(result);
    })
  }

  
 
}
