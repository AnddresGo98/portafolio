import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activarNav = false;
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.router.url == "/presentacion" ? (this.activarNav = false) : (this.activarNav = true);
    })
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
