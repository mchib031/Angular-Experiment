import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
// demonstrate template statements
  showText = false;

  //toggle text value on every method call
  toggleText(event?:any): void{
    this.showText = !this.showText;
    console.log(event)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
