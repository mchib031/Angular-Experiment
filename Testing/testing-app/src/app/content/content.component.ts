import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  //propriety binding
  imgURL = '../assets/images/odin1.jpg';
  isUnchanged = true;
  //attribute binding
  expression = "this is an expression";
  //class binding
  //we don't remove the propriety div but we remove the css class
  newClass= true;
  divstyle = 'color :white; background-color: black; padding-left:10px;'
  constructor() { }

  ngOnInit(): void {
  }

}
