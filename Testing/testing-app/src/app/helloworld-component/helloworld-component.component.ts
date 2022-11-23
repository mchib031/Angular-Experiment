import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloworld-component',
  //use selector in app.component.html to show component
  templateUrl: './helloworld-component.component.html',
  //template propriety if you're using a template within this file
  styleUrls: ['./helloworld-component.component.css']
  //styles propriety if you're using a template within this file
})
export class HelloworldComponentComponent implements OnInit {

  // public proprieties that you define in this class are accessible in the html template
  title = 'Data Binding';

  constructor() { }

  ngOnInit(): void {
  }

}
