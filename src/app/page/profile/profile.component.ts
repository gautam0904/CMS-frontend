import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/interfaces/user';
import { UpdateContentService } from 'src/app/core/update-content.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private ud: UpdateContentService) { }
  imageURL !: string;
  loading: boolean = false;
  profile = JSON.parse(localStorage.getItem('user') as string)
  updated: boolean = false;

  ngOnInit() {
    const profile = JSON.parse(localStorage.getItem('user') as string);
    this.imageURL = profile.profilepic;
  }

  edit(profile: IUser) {
    console.log(profile);

    this.updated = true;
    this.ud.setprofileData(profile)
  }
}
