import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
  
  private emp : Employee;
  
  constructor() { }

  ngOnInit() {
	  //this.getNemEmp();
	  this.emp = new Employee(100,"Jay", 24, 8998999090, "Raj Hotel");
  }
  
  getNemEmp(myForm){
	  console.log("myFormObj : ", myForm);
//	  this.emp = {
//		  empId: undefined,
//		  eName : "",
//		  age : undefined,
//		  mobileNumber : undefined,
//		  address: ""
//	  };
	  this.emp = new Employee(100,"Jay", 24, 8998999090, "Raj Hotel");
  }

}
