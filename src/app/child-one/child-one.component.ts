import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {
 childatoparent:string;
  @Output() messageEvent =  new EventEmitter();
  //
  @Input() childBtoparent:string;
  constructor() { }

  ngOnInit(): void {
  }


  sendMessageToC(){
    this.messageEvent.emit(this.childatoparent)
  }

}
