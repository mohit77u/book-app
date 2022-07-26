import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // step = 2 ; // hidden by default
  step = 1 ; // hidden by default
  changeStep(event: any, num: any) { 
    this.step = num
 }
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
