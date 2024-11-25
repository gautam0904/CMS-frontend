import { Component, Input, OnInit } from '@angular/core';
import { Icontent } from 'src/app/core/interfaces/user';
import { ContentService } from 'src/app/core/services/content.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts !: any;

  constructor(private content: ContentService) { }

  ngOnInit(): void {


    this.content.getpost().subscribe({
      next: (resdata: any) => {
        this.posts = resdata.data as Icontent;
      },
      error: (err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        })
      }
    })
  }

}
