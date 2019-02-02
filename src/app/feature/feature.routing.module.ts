import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FeatureComponent } from './feature.component';
import { PersonComponent } from './person/person.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { DirectiveComponent } from './directive/directive.component';
import { ClassStyleComponent } from './class-style/class-style.component';
import { PipeFilterComponent} from './pipe-filter/pipe-filter.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveForms2Component } from './reactive-forms2/reactive-forms2.component';
import { AngMaterialComponent } from './ang-material/ang-material.component';
import { ViewPersonComponent } from './view-person/view-person.component';
import { LifeCycleHookComponent } from './life-cycle-hook/life-cycle-hook.component';

export const routes: Routes = [
  {
    path: "my-app",
    component: FeatureComponent,
    data: { title: "Title from Router" },
    children: [
      /**
       * Landing Page 
       */
      {
        path: '',
        redirectTo: '/my-app/person',
        pathMatch: 'full'
      },
      {
        path: 'person',
        component: PersonComponent,
        data: {
          title: 'Person Details'
        }
      },
			{
			path: "rxjs",
			component: RxjsComponent 
			},
			{
			path: "directives",
			component: DirectiveComponent
			},
			{
			path: "class-style",
			component: ClassStyleComponent
			},
			{
			path: "pipes",
			component: PipeFilterComponent
			},
			{
			path: "reactive-forms",
			component: ReactiveFormsComponent
			},
			{
			path: "reactive-forms2",
			component: ReactiveForms2Component
			},
			{
			path: "template-driven-forms",
			component: TemplateDrivenFormsComponent
			},
			{
			path: "angular-material",
			component: AngMaterialComponent
			},
			{
			path: "person/:id",
			component: ViewPersonComponent
			},
			{
			path: "life-cycle-hook",
			component: LifeCycleHookComponent,
			}
	 // { path: '**', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {} 
