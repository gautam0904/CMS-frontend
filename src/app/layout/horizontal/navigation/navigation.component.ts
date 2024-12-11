// Angular import
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { Router } from '@angular/router';

// @ts-ignore
@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    standalone: false
})
export class NavigationComponent {
  // public props
  @Output() NavCollapsedMob = new EventEmitter();
  navCollapsedMob = window.innerWidth;
  windowWidth!: number;
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

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
    this.navCollapseMob();
  }

  // public method
  navCollapseMob() {
    if (this.windowWidth < 1025) {
      this.NavCollapsedMob.emit();
    }
  }
}
