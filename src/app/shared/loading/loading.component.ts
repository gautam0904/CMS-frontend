import { DOCUMENT } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

const Spinkit = {
  skChasingDots: 'sk-chasing-dots',
  skCubeGrid: 'sk-cube-grid',
  skDoubleBounce: 'sk-double-bounce',
  skRotatingPlane: 'sk-rotationg-plane',
  skSpinnerPulse: 'sk-spinner-pulse',
  skThreeBounce: 'sk-three-bounce',
  skWanderingCubes: 'sk-wandering-cubes',
  skWave: 'sk-wave',
  skLine: 'sk-line-material'
};

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoadingComponent {
  isloading = true;
  Spinkit = Spinkit;
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.router.events.subscribe({
      next: (event) => {
        if (event instanceof NavigationStart) {
          this.isloading = true;
        } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
          this.isloading = false;
        }
      },
      error: () => {
        this.isloading = false;
      }
    });
  }

  // life cycle event
  ngOnDestroy(): void {
    this.isloading = false;
  }
}
