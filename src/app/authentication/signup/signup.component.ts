import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IUser } from 'src/app/core/interfaces/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { UpdateContentService } from 'src/app/core/update-content.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  @Input() isedit: boolean = false
  @Input() profile: IUser | null = null

  signupForm!: FormGroup;
  selectedFile!: File;
  selectedRole: string = '';
  loading: boolean = false

  constructor(private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private messageService: MessageService,
    private ud: UpdateContentService) {


    this.signupForm = this.fb.group({
      _id: [''],
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      profilepic: [null, Validators.required],
      role: ['', Validators.required]
    })
  }


  ngAfterViewChecked() {
    if (this.isedit) {

      this.setInitialValues();
    }
  }


  setInitialValues() {
    // Example of setting initial values
    const newvalues = this.ud.profileForm
    if (newvalues) {
      this.signupForm.patchValue({
        _id: newvalues?._id,
        name: newvalues?.name,
        email: newvalues?.email,
        password: newvalues?.password,
        role: newvalues?.role
      });
      this.ud.deleteprofiledata();
    }

  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
    }
  }

  onSubmit() {
    this.loading = true;
    const res = this.isedit ? this.auth.updateProfile(this.signupForm.value, this.selectedFile) : this.auth.signup(this.signupForm.value, this.selectedFile);
    res.subscribe({
      next: (resdata: any) => {
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: resdata.message });
        this.isedit ? this.ud.setData(null) : this.router.navigate(['/auth'])
      },
      error: (res: any) => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.error.message });
      }
    })

  }

}
