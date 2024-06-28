import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PostComponent } from './post/post.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
<<<<<<< HEAD
import { MyContentComponent } from './my-content/my-content.component';
import { VideosComponent } from './videos/videos.component';
import { UsersComponent } from './users/users.component';
import { ImagesComponent } from './images/images.component';
import { ArticlesComponent } from './articles/articles.component';
import { PagesComponent } from './pages/pages.component';
import { ProfileComponent } from './profile/profile.component';
=======
import { UserComponent } from './user/user.component';
>>>>>>> 3b0fb3721c57bfed839bd0db3c8769530657dc44



@NgModule({
  declarations: [
    PostComponent,
    PostCreateComponent,
<<<<<<< HEAD
    MyContentComponent,
    VideosComponent,
    UsersComponent,
    ImagesComponent,
    ArticlesComponent,
    PagesComponent,
    ProfileComponent,
=======
    UserComponent,
>>>>>>> 3b0fb3721c57bfed839bd0db3c8769530657dc44
    
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PageModule { }
