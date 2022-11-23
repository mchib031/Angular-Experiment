import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
// demonstrate pipes
  date = new Date();


  constructor() { }

  ngOnInit(): void {
  }

}
