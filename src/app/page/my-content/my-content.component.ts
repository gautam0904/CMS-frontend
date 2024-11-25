import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Icontent } from 'src/app/core/interfaces/user';
import { ContentService } from 'src/app/core/services/content.service';
import { UpdateContentService } from 'src/app/core/update-content.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-content',
  templateUrl: './my-content.component.html',
  styleUrls: ['./my-content.component.scss']
})
export class MyContentComponent implements OnInit {
  id!: string;
  posts !: any;
  visible: boolean = false;
  updated: boolean = false;


  constructor(private messageService: MessageService, private cdr: ChangeDetectorRef, private content: ContentService, private ud: UpdateContentService) { }

  showConfirm() {
    if (!this.visible) {
      this.messageService.add({ key: 'confirm', sticky: true, severity: 'custom', summary: 'Uploading your files.' });
      this.visible = true;
    }
  }

  onClose() {
    this.visible = false;
  }
  ngOnInit(): void {

    const user = JSON.parse(localStorage.getItem('user') as string)
    this.id = user._id

    this.content.getpost(this.id).subscribe({
      next: (resdata: any) => {
        this.posts = resdata.data as Icontent;
      },
      error: (err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.error.message,
        })
      }
    })
  }

  edit(post: Icontent) {
    this.updated = true;
    this.ud.setData(post)
  }

  delete(post: Icontent) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.content.deletePost(post._id).subscribe({
          next: () => {
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            this.ngOnInit()
          },
          error: (err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err.error.message,
            })
          }
        })

      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });

  }
}
