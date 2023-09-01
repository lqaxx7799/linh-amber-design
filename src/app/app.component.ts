import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterEvent} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'linh-amber-design';
  public isMenuOpen = false;

  constructor(private router: Router) {}

  ngOnInit() {
    document.body.style.overflow = this.router.url.match('experience/.*') ? 'hidden' : 'auto';

    this.router.events.pipe(filter(value => value instanceof NavigationEnd))
      .subscribe({
        next: (routerEvent: RouterEvent) => {
          if (this.isMenuOpen) {
            this.isMenuOpen = false;
            document.body.style.overflow = 'auto';
          }
          document.body.style.overflow = routerEvent.url.match('experience/.*') ? 'hidden' : 'auto';
        }
      });
  }

  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto'
  }
}
