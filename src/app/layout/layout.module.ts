import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { PostsModule } from '../posts/posts.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    PostsModule,
    AppRoutingModule
  ],
  exports: [MainComponent, NavComponent, FooterComponent],
  declarations: [NavComponent, FooterComponent, MainComponent]
})
export class LayoutModule { }
