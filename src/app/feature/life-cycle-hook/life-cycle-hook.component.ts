import { Component, OnInit, ViewChild, ContentChild, ElementRef } from '@angular/core';
import { InnerComponent } from '../../components/inner/inner.component';

@Component({
  selector: 'app-life-cycle-hook',
  templateUrl: './life-cycle-hook.component.html',
  styleUrls: ['./life-cycle-hook.component.css']
})

//https://embed.plnkr.co/?show=preview
export class LifeCycleHookComponent implements OnInit {
  private name: string;
	
  @ViewChild(InnerComponent) viewInnerChild: InnerComponent;
	
  //@ContentChild("name") viewContentChild: ElementRef;

  constructor() { 
      console.log("inside LifeCycleHookComponent constructor ()");
  }

  ngOnInit() {
	  console.log("inside LifeCycleHookComponent ngOnInit () ----");
  }
	
  ngOnChanges() {
	  console.log("inside LifeCycleHookComponent  ngOnChanges () ----");
  }

  ngDoCheck() {
	  console.log("inside LifeCycleHookComponent ngDoCheck () ----");
  }
	
  ngAfterContentInit(){
	  console.log("inside LifeCycleHookComponent ngAfterContentInit () ----");
  }	
	
  ngAfterViewInit(){
	  console.log("inside LifeCycleHookComponent ngAfterViewInit () ----");
  }
	
  ngAfterContentChecked(){
	  this.name = this.viewInnerChild.innerName; 
	  //this will call again angular change  detection (parent childs -> doCheck and contentChekced & viewChecked methods)
	  
	  //console.log("inside LifeCycleHookComponent ngAfterContentChecked = viewContentChild:  ", this.viewContentChild);
	  console.log("inside LifeCycleHookComponent ngAfterContentChecked:  " + this.viewInnerChild.innerName);
  }	
	
 //Parent ngAfterViewChecked will call always last. (after inner ngAfterViewChecked method)
  ngAfterViewChecked(){
	  //this.name = this.viewInnerChild.innerName;  // it gives error as expression has been changed
	  //console.log("inside LifeCycleHookComponent ngAfterViewChecked = viewContentChild:  ", this.viewContentChild);
	  console.log("inside LifeCycleHookComponent ngAfterViewChecked:  " + this.viewInnerChild.innerName);
  }
	
  ngOnDestroy() {
	  console.log("inside LifeCycleHookComponent ngOnDestroy () ----");
  }
}
