import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-interpolation',
  templateUrl: './text-interpolation.component.html',
  styleUrls: ['./text-interpolation.component.css']
})
export class TextInterpolationComponent implements OnInit {

  // create a method to demonstrate text interpolation in the html template

  determineMax(a:any,b:any){
    if (a>b){
      return a
    }
    return b;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
