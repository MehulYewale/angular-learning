import { Component, OnInit } from '@angular/core';
import { Employee, Address } from './employee';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from  '@angular/forms'


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  empModel: Employee;
  empFG : FormGroup;

  //addressArray : FormArray;
	
  addressList: Address [] = [new Address("Raj hotel2", "425510"), new Address("Raj Hotel3", "1255111")];
  
  constructor(private fb: FormBuilder){

  }

  ngOnInit(){
    this.buildForm();
    //this.empModel = new Employee(101, "Vijay", 28, 43432324, "Raj Hotel");
  }
	
  buildForm(){
    this.empFG = this.fb.group({ 
      'id': "011",
      'name': ['', Validators.required],
      'age': new FormControl(),
      'mNumber': [],
      'addressGroup': this.fb.group({
         'address': [],
         'pincode' : []
      }),
     'addressArray': this.fb.array([]),
     
    });
    this.empFG.patchValue({ 'age': 18 });
	//this.setAddresses(this.addressList);
  }

  getEmpData(){
     
     this.empModel = new Employee(101, "Vijay", 28, 43432324, new Address("Raj Hotel", "4000097"));
     //mapping to form objects because form objects propertise are different from emp object
     let formModel = {
      'id': this.empModel.empId,
      'name': this.empModel.eName,
      'age': this.empModel.age,
      'mNumber': this.empModel.mobileNumber,
      'addressGroup' :{
         'address': this.empModel.addressGroup.address,
         'pincode': this.empModel.addressGroup.pincode
      }
	 // 'addressArray': []
     }
     //setting up form object to update form valus in Ui
    // this.empFG.setValue(formModel);
     this.empFG.patchValue(formModel);
	 this.setAddresses(this.addressList);
	
  }
  
  setAddresses(addresses: Address[]) {
	  const addressFGs = addresses.map(address => this.fb.group(address));
	    // Notice that the addressArray FormArray contains FormGroups, not Addresses.
	  const addressFormArray = this.fb.array(addressFGs);
	  this.empFG.setControl('addressArray', addressFormArray);
	  console.log("inside setAddress : " , this.addressArray);
  }
	
  get addressArray(): FormArray {
  		return this.empFG.get('addressArray') as FormArray;
  };	
  
  addAddress(){
	  this.addressArray.push(this.fb.group(new Address('','')));
  }
  removeAddresses(){
	 // this.empFG.removeControl('addressArray');
	  this.empFG.setControl('addressArray', this.fb.array([]));
	  
	  // FormArray with the FormGroup.setControl method, not with setValue. You're replacing a control, not the value of a control.
  }

  saveEmpData(){
    console.log("empFG : ", this.empFG.value);
    console.log("empFG.address.pincode : ", this.empFG.get("addressGroup.pincode").value);
    console.log("empFG.name : ", this.empFG.controls.name.value);

    this.empFG.controls.name.markAsDirty();  //To show validation msg on submit button
    this.empFG.markAsDirty();   //  this will make form as dirty but not controls get marked
  }
  resetForm(){
    this.empFG.reset();
  }

}
