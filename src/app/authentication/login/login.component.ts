import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform ! : FormGroup;
  loading:boolean= false

  constructor(private fb : FormBuilder , private author : AuthService , private router : Router , private messageService: MessageService) {}

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email : ['' , Validators.required],
      password : ['' , Validators.required]
    });

  }
  onsubmit():void{
    this.loading = true;
    if (this.loginform.valid) {
      this.author.login(this.loginform.value).subscribe({
        next : (resdata : any) => {
          this.loading = false
          console.log(resdata);
          localStorage.clear();
          localStorage.setItem('token',resdata.data.token);
          localStorage.setItem('user',JSON.stringify(resdata.data.user));
          // localStorage.setItem('user',JSON.stringify(resdata.data.user));
          this.loginform.reset();
          this.router.navigate(['/'])
          Swal.fire({          
            icon: "success",
            title: "Oops...",
            text: resdata.message || "something went wrong",
          });
        },
        error : (res) => {
          this.loading =false
          console.log(res);
          
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: res.error.message,
          })
        }
      })
    }
  }
}
