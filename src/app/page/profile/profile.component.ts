import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
imageURL !: string;
loading:boolean= false;
profile = JSON.parse(localStorage.getItem('user') as string)

  ngOnInit() {
    const profile = JSON.parse(localStorage.getItem('user') as string); 
    this.imageURL = profile.profilepic;
  }
}
