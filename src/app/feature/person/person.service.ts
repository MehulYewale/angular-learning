import { Injectable } from '@angular/core';
import { Http, Headers, ResponseOptions, Response } from '@angular/http'
import { ResponseContentType } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs';


@Injectable()
export class PersonService {

  constructor(private http: Http) { }
    
  postPersonData(personDetails : any) : Observable<any>{
       return this.http.post("http://localhost:3000/personData", personDetails);
          
       // this.http.put("http://localhost:3000/personData/2", personDetails).subscribe(this.handleSaveSuccess, this.handleError);
  }
    
  getTitle() : Observable<Response>{
      //  let headers = new Headers();
    //  headers.append('Content-Type', 'application/json');
      
      return this.http.get("http://localhost:3000/titleChange"); //, { headers: headers}
  }
  
  getPersonData() : Observable<Response>{
    return this.http.get("http://localhost:3000/personData");
  }
  
  getDataInJSON() : Observable<any> {
    let subject = new Subject<Response>();
    const response2 = this.getPersonData().subscribe((response : Response) => {
      subject.next(response.json());
    });
    return subject;
  }
	
}
