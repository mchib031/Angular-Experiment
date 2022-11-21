import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
// import input decorator to demonstrate parent to child component communication
// import output and event emitter to demonstrate child to parent communication
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
//name input childMessage of type string
  @Input() childMessage: String | undefined;
//declare message event variable with output decorator
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  // output used for buttons and forms
  sendMessage(){
    this.messageEvent.emit("Hello from child");
  }
}
