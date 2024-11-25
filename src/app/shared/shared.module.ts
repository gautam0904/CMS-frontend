import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { DropdownModule } from 'primeng/dropdown';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    InputComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    DropdownModule
  ],
  exports: [
    LoadingComponent
  ]
})
export class SharedModule { }
