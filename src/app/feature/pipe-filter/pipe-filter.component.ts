import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http'


import { RxjsService } from './../rxjs/rxjs.service';


@Component({
  selector: 'app-pipe-filter',
  templateUrl: './pipe-filter.component.html',
  styleUrls: ['./pipe-filter.component.css']
})
export class PipeFilterComponent implements OnInit {

  private personData: object[] = [];
  private filterBy = 'mobileNumber';
  //private personData: Array<object> = [];
	
  constructor(private rxjsService: RxjsService) { }

  ngOnInit() {
	  this.getAllPersonData().subscribe(this.handleSuccess,this.handleError);
  }
 
  getAllPersonData(){
	 return this.rxjsService.getPersonData().map((response : Response) => {
		  console.log("GetPersonData : ", response);
		  return response.json();
	 });
  }
	
  handleSuccess = (data) => {
	  console.log("Inside handleSuccess :", data);
	  this.personData = data;
  }

  handleError = (data) => {
	  console.log("Inside handleError :", data);
  }

}
