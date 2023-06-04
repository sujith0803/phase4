import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
 p1=true

 array=[1,2,3,4,5]
 addfruit(fname:any){
this.fruits.push(fname)
 }

fruits=["apple","banana","mango"]
}
