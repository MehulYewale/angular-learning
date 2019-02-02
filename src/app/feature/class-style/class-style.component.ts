import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit {

  private myStyle = {'color':'yellow', 'font-weight': 'bold'};
  private thirdClass = true;
	
  /**
     TODO : look at the mobile.component.css to know component level css & global level style.css
  */
	
  constructor() { }

  ngOnInit() {
  }

}
