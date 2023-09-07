import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  public isSafeMenuOpen = false;

  @ViewChild('toggleIcon') toggleIcon: ElementRef;

  constructor(private router: Router) {}

  ngOnInit() {
    document.body.style.overflow = this.router.url.match('experience/.*') ? 'hidden' : 'auto';

    this.router.events.pipe(filter(value => value instanceof NavigationEnd))
      .subscribe({
        next: (routerEvent: RouterEvent) => {
          if (this.isMenuOpen) {
            this.isMenuOpen = false;
            this.toggleIcon.nativeElement.className = "menu animate";
            document.body.style.overflow = 'auto';
            setTimeout(() => {
              this.isSafeMenuOpen = false;
            });
          }
          document.body.style.overflow = routerEvent.url.match('experience/.*') ? 'hidden' : 'auto';
        }
      });
  }

  public toggleMenu() {
    if (!this.isMenuOpen) {
      this.isSafeMenuOpen = true;
      this.isMenuOpen = true;
      document.body.style.overflow = 'hidden';
    } else {
      this.isSafeMenuOpen = false;
    }

    if (this.toggleIcon.nativeElement.classList.contains("close")) {
      this.toggleIcon.nativeElement.className = "menu animate";
    } else {
      this.toggleIcon.nativeElement.className = "close animate";
    }
  }

  public onMenuFinishClose() {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
    this.toggleIcon.nativeElement.className = "menu animate";
  }
}
