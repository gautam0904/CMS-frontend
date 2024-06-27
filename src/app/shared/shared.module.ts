import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { CreateIconComponent } from './create-icon/create-icon.component';
import { DropdownModule } from 'primeng/dropdown';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    InputComponent,
    CreateIconComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    DropdownModule
  ],
  exports : [
    CreateIconComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
