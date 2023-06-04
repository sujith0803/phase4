import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
 name="sujith" 

 myfun(){
  alert("hello sujith")
 }
 xyz(user:any){
  alert("hello  "+user)
 }
}
