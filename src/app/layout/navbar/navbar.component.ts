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
<<<<<<< HEAD
  role!: string
=======
  Role!:string
>>>>>>> 3b0fb3721c57bfed839bd0db3c8769530657dc44

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string);
    this.userName = user.name;
    this.imageURL = user.profilepic
<<<<<<< HEAD
    this.role = user.role
    console.log(this.role);
=======
    this.Role = user.role
>>>>>>> 3b0fb3721c57bfed839bd0db3c8769530657dc44
    
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['auth']);
  }
}
