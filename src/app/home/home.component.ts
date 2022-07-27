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

//  define variables
  name: string = '';
  email: string = '';
  mobile: string = '';
  book_orientation: string = '';
  paper_size: string = '';
  paper_count: string = '';
  book_content: string = '';
  sample: string = '';
  quality: string = '';
  gsm: string = '';
  interior_color: string = '';
  cover_page: string = '';
  cover_quality: string = '';
  binding_type: string = '';
  book_quantity: string = '';
  book_name: string = '';
  // cover_quality: string = '';
  // cover_quality: string = '';
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
