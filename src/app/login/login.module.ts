import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AuthComponent],
  declarations: [AuthComponent]
})
export class LoginModule { }