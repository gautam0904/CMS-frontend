import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';
import { UpdateContentService } from 'src/app/core/update-content.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  @Input() isupdate = false;
  createpost !: FormGroup;
  selectedFile!: File;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private post: ContentService, private router: Router, private ud: UpdateContentService) { }

  ngOnInit(): void {
    this.createpost = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      midea: ['', Validators.required],
    })
  }

  ngAfterViewChecked() {
    if (this.isupdate) {
      this.setInitialValues();
    }
  }


  setInitialValues() {
    // Example of setting initial values
    const newvalues = this.ud.dynamicForm

    this.createpost.patchValue({
      title: newvalues.title,
      description: newvalues.description
    });
    this.ud.deleteData();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
    }
  }

  onsubmit() {
    this.loading = true
    const apiPost = this.isupdate ? this.post.updatePost(this.createpost.value, this.selectedFile) : this.post.createpost(this.createpost.value, this.selectedFile)

    apiPost.subscribe({
      next: (resdata: any) => {
        this.loading = false;
        Swal.fire({
          icon: "success",
          title: "Oops...",
          text: resdata.message,
        });
        this.ud.setData(null);
        this.router.navigate(['/'])
      },
      error: (res: any) => {
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
