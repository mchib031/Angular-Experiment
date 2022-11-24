import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  imgURL = '../assets/images/odin1.jpg';
  isUnchanged = true;
  constructor() { }

  ngOnInit(): void {
  }

}
