import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() field!: string;
  @Input() inputType!: string;
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      field: new FormControl('', [])
    });
  }
}
