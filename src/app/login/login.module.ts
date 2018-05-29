import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './auth/auth.component';
import { LoginRoutingModule } from './/login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  exports: [AuthComponent],
  declarations: [AuthComponent]
})
export class LoginModule { }
