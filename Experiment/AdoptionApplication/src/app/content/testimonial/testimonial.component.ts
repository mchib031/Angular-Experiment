import { Component, OnInit } from '@angular/core';
import AOS from "aos";


@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit{

  ngOnInit(): void {
    AOS.init();
  }
}
