import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  createpost !: FormGroup;
  selectedFile!:File;
  loading : boolean = false;

  constructor(private fb : FormBuilder , private post : ContentService , private router : Router ) {}

  ngOnInit(): void {
    this.createpost = this.fb.group({
      title : ['' , Validators.required],
      description : ['' , Validators.required],
      midea : ['' , Validators.required],
    })
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
    
      console.log(file)
    }
  }

  onsubmit(){
    this.loading = true
    this.post.createpost(this.createpost.value ,this.selectedFile ).subscribe({
      next : (resdata : any) => {
        this.loading = false;
        Swal.fire({
          icon: "success",
          title: "Oops...",
          text: resdata.message,
        })
        this.router.navigate(['/'])
      },
      error : (res : any) => {
        this.loading = false;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: res.error.message,
        })
      }
    })
  }
}
