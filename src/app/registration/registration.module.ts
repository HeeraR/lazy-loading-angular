import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './form/form.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    FormsModule
  ]
})
export class RegistrationModule { }
