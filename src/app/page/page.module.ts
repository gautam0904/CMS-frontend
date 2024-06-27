import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PostComponent } from './post/post.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PostComponent,
    PostCreateComponent,
    
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PageModule { }
