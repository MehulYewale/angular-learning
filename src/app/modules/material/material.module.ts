import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [],
  exports: [
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class MaterialModule { }
