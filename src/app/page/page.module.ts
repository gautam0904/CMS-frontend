import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PostComponent } from './post/post.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MyContentComponent } from './my-content/my-content.component';
import { VideosComponent } from './videos/videos.component';
import { UsersComponent } from './users/users.component';
import { ImagesComponent } from './images/images.component';
import { ArticlesComponent } from './articles/articles.component';
import { PagesComponent } from './pages/pages.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticationModule } from '../authentication/authentication.module';
import { AnaliticsComponent } from './analitics/analitics.component';


@NgModule({
  declarations: [
    PostComponent,
    PostCreateComponent,
    MyContentComponent,
    VideosComponent,
    UsersComponent,
    ImagesComponent,
    ArticlesComponent,
    PagesComponent,
    ProfileComponent,
    AnaliticsComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    AuthenticationModule
  ]
})
export class PageModule { }
