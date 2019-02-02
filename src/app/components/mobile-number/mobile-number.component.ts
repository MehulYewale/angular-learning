import { Component, OnInit, Input, Output, forwardRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Form, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RxjsService } from './../../feature/rxjs/rxjs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mobile-number',
  templateUrl: './mobile-number.component.html',
  styleUrls: ['./mobile-number.component.css'],
  providers: [{
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MobileNumberComponent),
  multi: true
}]
})
export class MobileNumberComponent implements OnInit, ControlValueAccessor {

  @Input() label: string = 'Mobile Number';
  @Output() childControl : FormControl = new FormControl();
  private subcription: Subscription;
	
  private mydata: string;
  
  constructor(private rxService: RxjsService) { }

  ngOnInit() { 
	console.log("Inside Mobile number component ngOnInit :");
	  //just binding with person component. Registering the subscribe when next call from person
	this.subcription = this.rxService.sharedObservalble$.subscribe( mydata => {
		console.log("Inside Mobile number component sharedObservalble$.subscribe -- mydata -: ", mydata);
		this.mydata = mydata;
	});
  }
	
  // ControlValueAccessor & above providers are needed to do a two way databinding between two components
	
  writeValue(value : any){
	  this.childControl.setValue(value);
  }
  
  registerOnChange(fn: (value: any) => void) {
    this.childControl.valueChanges.subscribe(fn);
  }
  registerOnTouched(){ }
 
  setDisabledState(isDisabled: boolean): void {
	  if(isDisabled){
  		this.childControl.disable({ onlySelf: isDisabled, emitEvent: false });
	  } else {
		  this.childControl.enable({ onlySelf: !isDisabled, emitEvent: false });
	  }
  }

  ngOnDestroy(){
    //These will unsubribe the subcribe method -- because it's subcribing again on navigation of person link
    console.log("Inside ngOnDestroy in mobile number component");
    this.subcription.unsubscribe();
  }

}
