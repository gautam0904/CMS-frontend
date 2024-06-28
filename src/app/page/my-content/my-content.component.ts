import { Component, OnInit } from '@angular/core';
import { Icontent } from 'src/app/core/interfaces/user';
import { ContentService } from 'src/app/core/services/content.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-content',
  templateUrl: './my-content.component.html',
  styleUrls: ['./my-content.component.scss']
})
export class MyContentComponent implements OnInit {
  id!: string;
  posts !: any;

  constructor(private content : ContentService ){}
  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string)
    this.id = user._id

  this.content.getpost(this.id).subscribe({
    next : (resdata : any) => {
      this.posts = resdata.data as Icontent;
    },
    error : (err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.error.message,
      })
    }
  })
}
}
