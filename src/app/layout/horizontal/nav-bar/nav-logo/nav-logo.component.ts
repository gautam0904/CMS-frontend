// Angular import
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav-logo',
    templateUrl: './nav-logo.component.html',
    styleUrls: ['./nav-logo.component.scss'],
    standalone: false
})
export class NavLogoComponent {
  // public props
  @Input()navCollapsed!: boolean;
  @Output() NavCollapse = new EventEmitter();
  windowWidth = window.innerWidth;
  imageURL!: string
  userName !: string
  role!: string

  constructor(private router: Router) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string);
    this.userName = user.name;
    this.imageURL = user.profilepic
    this.role = user.role

  }
  logout() {
    localStorage.clear();
    this.router.navigate(['auth']);
  }
  navCollapse() {
    this.navCollapsed = !this.navCollapsed;
    this.NavCollapse.emit(this.navCollapsed);
  }
}
