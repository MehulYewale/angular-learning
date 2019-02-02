import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from  '@angular/forms'

@Component({
  selector: 'app-reactive-forms2',
  templateUrl: './reactive-forms2.component.html',
  styleUrls: ['./reactive-forms2.component.css']
})
export class ReactiveForms2Component implements OnInit {

  private myFG: FormGroup;
  
  countries : object[] = [{ name: "India", id: '1'}, { name: "US", id: '2'}, { name: "UK", id: '3'}];
  cities : string[] = [];
	
  pinCodeChangeList : string[] = [];
 
  constructor(private fb: FormBuilder) {  }

  ngOnInit() {
	  this.buildForm();
	  this.setFormValues();  
  }
	
  buildForm(){
	  this.myFG = this.fb.group({
		  country : [],
		  city : [],
		  pincode : [],
		  phoneNumber : [],
		  car: [],
		  bike: [],
		  gender: []
	  });
	  this.logPincodes();
  }

  private setFormValues(){
	  let formData = {
		  country : '',
		  city : '',
		  pincode : '56567',
		  phoneNumber : '',
		  car : false,
		  bike : true,
		  gender : 'Male'
	  };
	  this.myFG.setValue(formData);
  }
	
  private getCities(){
	  let cityList = [
		  {
			  countryName : "India",
			  cities : ["Bangalore", "Chennai", "Mumbai", "Hyderabad"]
		  },
		  {
			  countryName : "US",
			  cities : ["San Diago", "NewYork", "Boston", "Fork"]
		  },
		  {
			  countryName : "UK",
			  cities : ["Parris", "New Castle"]
		  }
	  ];
	  return cityList;
  }

  onCountryChange(){
	  console.log("Inside Country change : " , this.myFG.get("country").value)
	  //this.myFG.removeControl("city");
	 // let countryName = this.myFG.get("country").value;
	  let countryName = this.myFG.value.country;
	  if(countryName != "") {
	  	this.cities = this.getCities().filter(value  => value.countryName == countryName)[0].cities; 
	  } else {
		this.cities = [];	
	  }
	  
	  this.myFG.setControl("city", this.fb.control(""));  //It will replace the control 
	 // this.myFG.addControl("city", this.fb.control(""));   //if already exist it will not add
  }

  logPincodes(){
	  const pincode = this.myFG.get("pincode") as FormControl;
	  pincode.valueChanges.forEach(value => this.pinCodeChangeList.push(value));	   
  }
  
}
