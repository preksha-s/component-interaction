import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentchild';
  childatoparent:any;
  childBtoparent:any;

  constructor(){} 
   recieveMessageFromChild(msg){
    this.childatoparent=msg;

  }
  //
  
  sendMessageFromPtoC(pc){
   
    this.childBtoparent=pc;
  }
  
}


// console.log(pc);  {write in func and debug}