import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupComponent } from './formGroup.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ FormGroupComponent ],
  exports: [ FormGroupComponent ]
})
export class FormModule { }