import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { MyContentComponent } from './my-content/my-content.component';
import { ProfileComponent } from './profile/profile.component';
import { VideosComponent } from './videos/videos.component';
import { ImagesComponent } from './images/images.component';
import { PagesComponent } from './pages/pages.component';
import { ArticlesComponent } from './articles/articles.component';
import { UsersComponent } from './users/users.component';
import { AnaliticsComponent } from './analitics/analitics.component';

const routes: Routes = [
  {
    path : '',
    component : PostComponent
  },
  {
    path : 'addPost',
    component : PostCreateComponent
  },
  {
    path : 'myContent',
    component : MyContentComponent
  },
  {
    path : 'profile',
    component : ProfileComponent
  },
  {
    path : 'videos',
    component : VideosComponent
  },
  {
    path : 'users',
    component : UsersComponent
  },
  {
    path : 'images',
    component : ImagesComponent
  },
  {
    path : 'pages',
    component : PagesComponent
  },
  {
    path : 'articles',
    component : ArticlesComponent
  },
  {
    path : 'analitics',
    component : AnaliticsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
