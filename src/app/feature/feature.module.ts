//  Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material/material.module';


//Components
import { FeatureComponent } from './feature.component';
import { FeatureRoutingModule } from './feature.routing.module';
import { PersonComponent } from './person/person.component';
import { MobileNumberComponent } from '../components/mobile-number/mobile-number.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { RxjsService } from './rxjs/rxjs.service';
import { DirectiveComponent } from './directive/directive.component';
import { CssDisplayDirective } from './../directives/css-display.directive';
import { ClassStyleComponent } from './class-style/class-style.component';
import { PipeFilterComponent } from './pipe-filter/pipe-filter.component';
import { MyPipePipe } from '../pipes/my-pipe.pipe';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveForms2Component } from './reactive-forms2/reactive-forms2.component';
import { AngMaterialComponent } from './ang-material/ang-material.component';
import { ViewPersonComponent } from './view-person/view-person.component';
import { LifeCycleHookComponent } from './life-cycle-hook/life-cycle-hook.component';
import { InnerComponent } from '../components/inner/inner.component';

@NgModule({
  imports: [
    CommonModule,
	FeatureRoutingModule,
	  
	//Date -modules  
	MaterialModule,
	  
	//forrm modules
	FormsModule,
    ReactiveFormsModule,
    	
  ],
  declarations: [
    FeatureComponent,
    PersonComponent,
    MobileNumberComponent,
    RxjsComponent,
    DirectiveComponent,
	ClassStyleComponent,
	PipeFilterComponent,
	TemplateDrivenFormsComponent,
	ReactiveFormsComponent,
	ReactiveForms2Component,
	AngMaterialComponent,
	ViewPersonComponent,
	LifeCycleHookComponent,
	InnerComponent,

	CssDisplayDirective,
	MyPipePipe
  ],
  providers: [RxjsService],
  exports : [FeatureComponent]
})
export class FeatureModule { 
	/*
    static forRoot() {
        return {
            
        }
    }
	*/
	
}
