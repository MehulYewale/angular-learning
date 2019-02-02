import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FeatureModule } from './feature/feature.module';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
//import { CssDisplayDirective } from './directives/css-display.directive';

@NgModule({
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    HttpModule,
    FeatureModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
    //CssDisplayDirective
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }

// google-chrome --disable-web-security --user-data-dir  
// ng g c mobile-number -module feature
