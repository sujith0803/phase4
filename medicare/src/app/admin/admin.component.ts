import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminServiceService } from '../admin-service.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin : Admin = new Admin();
  admins : Admin[]
 constructor(private adminService : AdminServiceService){}


  ngOnInit(): void {
   
  }
addAdmin(){

  this.adminService.addAdmin(this.admin).subscribe(data => {console.log(data)}, error =>console.log(error));
  
 
  
}
getAllAdmin(){
  this.adminService.getAllAdmin().subscribe(data =>{this.admins=data})
}

  onSubmit(){
    console.log(this.admin);
    this.addAdmin();
  }
  onadd(){
    console.log(this.admins);
    this.getAllAdmin();
  }
  
}