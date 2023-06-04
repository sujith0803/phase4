import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminServiceService } from '../admin-service.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user: User= new User();
  constructor(private userService: AdminServiceService, private router:Router){}
  addUser(){
    this.userService.saveUser(this.user).subscribe(data => {console.log(data)}, error =>console.log(error));
  }
  
  onSubmit(){
    console.log(this.user);
    this.addUser();
    this.router.navigateByUrl('home')
  }

  ngOnInit(): void {
    
  }


}
