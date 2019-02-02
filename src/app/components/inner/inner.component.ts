import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {

  @Input() myInput : string;
  public innerName: string;
		
  constructor() { 
      console.log("inside InnerComponent constructor ()")
  }

  ngOnInit() {
	  console.log("inside InnerComponent ngOnInit () ----");
  }
	
  ngOnChanges() {
	  console.log("inside InnerComponent  ngOnChanges () ----");
  }

  ngDoCheck() {
	  console.log("inside InnerComponent ngDoCheck () ----");
  }
	
  ngAfterContentInit(){
	  console.log("inside InnerComponent ngAfterContentInit () ----");
  }	
	
  ngAfterContentChecked(){
	  console.log("inside InnerComponent ngAfterContentChecked () ----");
  }	
  
  ngAfterViewInit(){
	  console.log("inside InnerComponent ngAfterViewInit () ----");
  }
	
  ngAfterViewChecked(){
	  console.log("inside InnerComponent ngAfterViewChecked () ----");
  }

  ngOnDestroy() {
	  console.log("inside InnerComponent ngOnDestroy () ----");
  }

}
