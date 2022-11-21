import {Component, Input, OnInit} from '@angular/core';
// import input decorator to demonstrate parent to child component communication

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
//name input childMessage of type string
  @Input() childMessage: String | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
