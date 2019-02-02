import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, FormArray, Form, Validators } from '@angular/forms';
import { PersonService } from './person.service';
import { Observable } from 'rxjs/Observable';
import { RxjsService } from './../rxjs/rxjs.service';
//import { forkJoin } from "rxjs/observable/forkJoin";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers: [PersonService]
})
export class PersonComponent implements OnInit, OnChanges {

  private title: string = 'title will be here';
  private myForm: FormGroup;
  private ageTrack: boolean = false;
  private dName: boolean = true;
  private personData: any;   
    
  constructor(private fb: FormBuilder, private personService : PersonService,
			  private rxjsService: RxjsService, private router: Router){
      
  }
  ngOnInit(){
      this.buildForm(); 
     // this.myForm.setValue({name: "sharad" , age: 19, privateGroup: {adharCardNo: 223231, mobileNumber: 20}});
	  
     this.rxjsService.setSharedObservable("Welcome to my world2");
	 this.myForm.get("name").valueChanges.subscribe(value => {
		 console.log("form -name conrole Value Changes --", value);
		 console.dir(this.myForm.get("name"));
	 });
  }
 
  ngOnChanges(){
	  console.log("this is on ngOnChanges");
  }
 
  buildForm(){
	  // disabled -- if form control is disabled then it also disables all the validation (of that control) as well.
      this.myForm = this.fb.group({
		//name: new FormControl('', Validators.required),
        name: new FormControl({ value :'', disabled: false }, Validators.required),
        age: new FormControl('', [Validators.required, Validators.min(18)]), mobileNumber: new FormControl(''),
        privateGroup: this.fb.group({ adharCardNo : new FormControl('') })
      });
  }
    
  onSubmit(){
      if(this.myForm.valid){
        console.log("Form Valid :", this.myForm.value);
        let personDetails = { "name": this.myForm.get("name").value, 
							  "age": undefined,
							  "mobileNumber": this.myForm.get("mobileNumber").value,
							  "adharCardNo": undefined
							};
		  
        personDetails.age = this.ageTrack ? this.myForm.get("age").value : undefined;
		  
        let privateGp = this.myForm.get("privateGroup") as FormGroup;
        personDetails.adharCardNo = privateGp.get("adharCardNo").value;
          
        this.personService.postPersonData(personDetails).subscribe(this.handleSaveSuccess, this.handleError)
          
        console.log("Submitted");
          
      } else {
        console.log("Form Invalid");
      }
  }
  trackAge(){
      this.ageTrack = ! this.ageTrack;
      this.myForm.addControl("age", new FormControl('', [Validators.required, Validators.min(18)]));
  }
	
  disableForm(value : boolean){
	  value ? this.myForm.disable(): this.myForm.enable();
  }
	
  clearNameValidators(value : boolean){
	  console.dir(this.myForm.controls["name"]);
	  value == true ? this.myForm.controls["name"].clearValidators() : this.myForm.controls["name"].setValidators([Validators.required]);
	  this.myForm.controls["name"].setValue(this.myForm.controls["name"].value); // to  call change detection
	 // this.myForm.updateValueAndValidity({onlySelf: false, emitEvent: false});
  }
	
  
  getTitle(){
	   //calling subscribe of mobile componennt method
	   let msg = this.rxjsService.sharedValue;
	   this.rxjsService.setSharedObservable("Welcome to " + msg);
	   
	   //this.router.navigateByUrl('/my-app/rxjs');
       this.personService.getTitle().subscribe(this.handleSuccess, this.handleError);
  }
    
  handleSuccess = (responseData) => {
      let data = JSON.parse(responseData._body);
      this.title = data.newtitle;
      this.ageTrack = data.aggTrack;
      this.myForm.removeControl("age");
      console.log("Success");
  }
  handleSaveSuccess = (respnseData) => {
     console.log("Successfully Saved", respnseData);
     this.getPersonDetails();
  }

  handleError = (responseData) => {
      console.log("Failed");
  }
  
  getPersonDetails(){
     // this.personService.getPersonData().subscribe(this.handlePersonDetailsSuccess, this.handleError);

      this.personService.getDataInJSON().subscribe(response => this.personData = response);
  }
    
  handlePersonDetailsSuccess = (responseData : Response) => {
      console.log("PersonDetailsSuccess");
      //responseData.json();
      this.personData = responseData.json();
      console.log("Person-Data : ----", this.personData);
  }

  

}
