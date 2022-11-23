import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentMsg="Hello from parent";
  constructor() { }

  ngOnInit(): void {
  }

  //message received from child
  receiveMessage(msg:any){
    alert(msg);
  }

}
