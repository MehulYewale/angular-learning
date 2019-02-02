import { Component, OnInit, OnChanges } from '@angular/core';

// Directive doesn't work with different router-outlets. (if directive imported in app.module it will be accessible in only app module but not in feature module And if it imported in feature.module will not work for app.module)

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  private myone : boolean = true;
  constructor() { }
	
  ngOnInit() { }
	
  changeInText(target){
	  console.log("Inside component changeInText : ", target);
	  target.innerText = "Thank you very much";
	  this.myone = false;
  }
 
 

}
