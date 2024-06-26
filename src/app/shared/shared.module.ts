import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { CreateIconComponent } from './create-icon/create-icon.component';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    InputComponent,
    CreateIconComponent
  ],
  imports: [
    CommonModule,
    DropdownModule
  ]
})
export class SharedModule { }
