import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/map';

import { RxjsService } from './rxjs.service';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

	/**
	*	http://reactivex.io/rxjs/manual/overview.html
	*/
	
  private subject = new Subject();
  
  private lastPersonId : number;
  private firstPersonId : number;
 
  
  constructor(private rxjsService: RxjsService) { }

  ngOnInit() {
	  console.log("Inside ngOnInit : "); 
	    
	  this.getAllPersonData().subscribe(this.handleSuccess,this.handleError);
		
		//Three observable are usful for multicast --  we can get any number of subcribes method get called 
	  this.doSubjectExecution();
	  this.doBehaviourSubjectExecution();
	  this.doReplySubjectExecution();
	  
	  ////////////////////////////////////////////////////////////////////////////
	  /**  forkJoin
	  *
	  this.rxjsService.getSinglePersonWithForkJoin().subscribe(result => {
		  console.log("id : 11 ",result[0]);
		  console.log("id : 12 ",result[1]);
	  });
	  
	  */
	  
	  /////////////////////////////////////////////////////////////////////////////
	  // next , asObservable
	  
	  /*
	  let observer = {
		next: x => console.log('Observer got a next value: ' + x),
		error: err => console.error('Observer got an error: ' + err),
		complete: () => console.log('Observer got a complete notification'),
	  };
	  this.getAllPersonData().subscribe(observer);
	  */
	  
	  ////////////////////////////////////////////////////////////////////////////////
	 
  }
  getAllPersonData(){
	 return this.rxjsService.getPersonData().map((response : Response) => {
		  console.log("GetPersonData : ", response);
		  return response.json();
	 });
  }
	
  handleSuccess = (data) => {
	  console.log("Inside handleSuccess :", data);
	  this.firstPersonId = data[0].id;
	  this.lastPersonId = data[data.length -1].id;
  }

  handleError = (data) => {
	  console.log("Inside handleError :", data);
  }

  syncCallBacks(id? : number){
	  id = id == undefined ? this.firstPersonId : id;
	  console.log("Inside onSyncButtonClick :");
	  this.rxjsService.getPersonDataWithSYNC(id).subscribe(data => {
		  id = id + 1;
		  if(id <= this.lastPersonId)
		  this.syncCallBacks(id);
	  });
  } 
  
  doSubjectExecution(){
		// A Subject is like an Observable, but can be multicast to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners.
		
	  this.subject.subscribe({  // it does not execute subscribe imediately after subscirbe  
		  next: (v) => console.log('doSubjectExecution observerA: ' + v)
		});
		this.subject.next(0);   //we can't put default value initilizer at the time of object creation
		this.subject.subscribe({
		  next: (v) => console.log('doSubjectExecution observerB: ' + v)
		});

		this.subject.next(1);   // it will call subscribes
		this.subject.next(2);	  
		
		this.subject.subscribe({
		  next: (v) => console.log('doSubjectExecution observerC: ' + v)
		});

		
	  ////////////////////////////////////////////////////////////////////////////////////

  }
	
  doBehaviourSubjectExecution(){
	  // maintain current value over all subscribe
	  
	  var subject = new BehaviorSubject(0); // 0 is the initial value // mandantory to initilize 

		subject.subscribe({   // it execute subscribe imediately after subscirbe  
		  next: (v) => console.log('doBehaviourSubjectExecution observerA: ' + v)
		});

		subject.next(1);
		subject.next(2);

		subject.subscribe({    // it execute subscribe imediately after subscirbe  
		  next: (v) => console.log('doBehaviourSubjectExecution observerB: ' + v)
		});

		subject.next(3);
	  
	  ///////////////////////////////////////////////////////////////////////////////////
	 
  }
  doReplySubjectExecution(){
	  
	  // maintain current value over all subscribe , also keep buffer top value
	  var subject = new ReplaySubject(3); // buffer 3 values for new subscribers

		subject.subscribe({			 // it execute subscribe imediately after subscirbe  
		  next: (v) => console.log('doReplySubjectExecution observerA: ' + v)
		});

		subject.next(1);
		subject.next(2);
		subject.next(3);
		subject.next(4);

		subject.subscribe({			// it execute subscribe imediately after subscirbe  
		  next: (v) => console.log('doReplySubjectExecution observerB: ' + v)
		});

		subject.next(5);
	  
	  subject.subscribe({			 // it execute subscribe imediately after subscirbe  
		  next: (v) => console.log('doReplySubjectExecution observerC: ' + v)
		});
		
		
	  //////////////////////////////////////////////////////////////////////////////////////
  }
}
