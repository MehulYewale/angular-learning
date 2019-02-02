import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Form, Validators } from '@angular/forms';
import { RxjsService} from './rxjs/rxjs.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  constructor(private rxjsService: RxjsService){  }
  ngOnInit(){
	   //just binding with person component. Registering the subscribe when next call from person
	  this.rxjsService.sharedValue = "my world2";
    this.rxjsService.sharedObservalble$.subscribe( mydata => {
		  console.log("Inside feature page sharedObservalble$.subscribe -- mydata : ", mydata);
	  });
  }
}
