import { Injectable } from '@angular/core';
import { Router, NavigationError } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationError) {
        // Handle the error
        console.error('Navigation Error:', event.error);
        // Redirect to 404 page
        this.router.navigate(['/404']);
      }
    });
  }
} 