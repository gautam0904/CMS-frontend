import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { DropdownModule } from 'primeng/dropdown';
import { LoadingComponent } from './loading/loading.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    InputComponent,
    LoadingComponent,
    BreadcrumbsComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    RouterModule
  ],
  exports: [
    LoadingComponent,
    BreadcrumbsComponent
  ]
})
export class SharedModule { }
