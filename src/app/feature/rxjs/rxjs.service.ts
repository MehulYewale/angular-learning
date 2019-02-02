import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import { forkJoin } from "rxjs/observable/forkJoin";
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable()
export class RxjsService {
	
	
  // Common variable which will be share across all the applications -- Singleton object
	
  private sharedObservalble = new Subject<string>();
	
  private _sharedValue : string;  
  
  sharedObservalble$ = this.sharedObservalble.asObservable();

  constructor(private http: Http) { }
	
  getSinglePersonWithForkJoin(){ 
	  
	   let inputArray = new Array();
	   inputArray.push(this.http.get("http://localhost:3000/personData/11")); 
	   inputArray.push(this.http.get("http://localhost:3000/personData/12")); 
	   return forkJoin(inputArray);
      
  }
	
  getPersonDataWithSYNC(id : number) : Observable<any>{
	  return this.http.get("http://localhost:3000/personData/" + id); 
  }
	
  getPersonData() : Observable<any>{
    return this.http.get("http://localhost:3000/personData");
  }
	
  setSharedObservable(data){
	  this.sharedObservalble.next(data);
  }
	
  get sharedValue (){
	  return this._sharedValue;
  }

  set sharedValue (value : string){
	  this._sharedValue = value;
  }

}
