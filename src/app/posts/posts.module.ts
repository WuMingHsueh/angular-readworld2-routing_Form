import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { EditorComponent } from './editor/editor.component';
import { AppRoutingModule } from '../app-routing.module';
import { PostsRoutingModule } from './/posts-routing.module';
import { MainComponent } from '../layout/main/main.component';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  declarations: [PostsComponent, PostComponent, EditorComponent]
})
export class PostsModule { }
