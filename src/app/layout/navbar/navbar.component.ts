import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router){}

  imageURL!: string
  userName !: string
  Role!:string

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string);
    this.userName = user.name;
    this.imageURL = user.profilepic
    this.Role = user.role
    
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['auth']);
  }
}
