import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {
  @Input() childatoparent:string
   
childBtoparent:string;

@Output() SendEvent = new EventEmitter();
 constructor() { }

  ngOnInit(): void {
  }
  sendMessageToPca(){
    console.log('erk')
    this.SendEvent.emit(this.childBtoparent)
  }

}
