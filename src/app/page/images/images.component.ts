import { Component } from '@angular/core';
import { Icontent } from 'src/app/core/interfaces/user';
import { ContentService } from 'src/app/core/services/content.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent {
  constructor(private content: ContentService) { }

  posts !: any[]

  ngOnInit(): void {


    this.content.getpost().subscribe({
      next: (resdata: any) => {
        this.posts = resdata.data as Icontent[];
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

  toggleDescription(post: any) {
    post.showFullDescription = !post.showFullDescription;
  }
}
