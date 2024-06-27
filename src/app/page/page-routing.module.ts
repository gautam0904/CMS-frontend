import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostCreateComponent } from './post-create/post-create.component';

const routes: Routes = [
  {
    path : '',
    component : PostComponent
  },
  {
    path : 'addPost',
    component : PostCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
