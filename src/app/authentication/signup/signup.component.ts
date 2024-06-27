import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent  {
  signupForm!: FormGroup;
  selectedFile!: File;
  selectedRole! :string;
  loading:boolean= false

  constructor(private fb: FormBuilder , private auth : AuthService ,private router : Router , private messageService: MessageService) { 
    this.signupForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        profilepic: [null, Validators.required],
        role: ['', Validators.required]
  })
  }



  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
    }
  }

  onSubmit() {
    this.loading = true;
    this.auth.signup(this.signupForm.value,this.selectedFile).subscribe({
      next: (resdata : any) => {
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: resdata.message });
        this.router.navigate(['/auth'])
      },
      error: (res : any) => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.error.message });
      }
    })
    
  }

}
