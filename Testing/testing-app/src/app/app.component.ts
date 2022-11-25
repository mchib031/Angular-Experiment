import {Component, OnDestroy, OnInit} from '@angular/core';
// import OnInit interface to demonstrate hooks

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  // implement OnInit to demonstrate hooks
  intervalSub: string | number | NodeJS.Timer | undefined;
  ngOnInit() {
    //method for interface implementation
    this.intervalSub = setInterval(() => {
      console.log('Hello from ngOnInit');
    }, 1000)
  }

  ngOnDestroy() {
    if (this.intervalSub){
      clearInterval(this.intervalSub);
    }
  }

  title = 'testing-app';

  customEventBind(item: any){
    console.log(item)
  }
}
