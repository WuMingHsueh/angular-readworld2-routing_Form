import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MainComponent, NavComponent, FooterComponent],
  declarations: [NavComponent, FooterComponent, MainComponent]
})
export class LayoutModule { }
