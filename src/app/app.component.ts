import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router, RouterEvent} from "@angular/router";
import {filter} from "rxjs";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      state('start', style({
        opacity: 0,
      })),
      state('end', style({
        opacity: 1,
      })),
      transition('start => end', [
        animate('0.3s ease-in-out'),
      ]),
      transition('end => start', [
        animate('0.3s ease-in-out'),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'linh-amber-design';
  public isMenuOpen = false;
  public isSafeMenuOpen = false;
  public isSplashShown = true;
  public isSplashSuspend = false;
  public splashState = 'end';

  @ViewChild('toggleIcon') toggleIcon: ElementRef;
  @ViewChild('videoHome') videoHomeRef: ElementRef;

  constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef) {}

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

  ngAfterViewInit() {
    this.videoHomeRef.nativeElement.play()
      .then(() => {})
      .catch(() => {
        this.isSplashSuspend = true;
        setTimeout(() => {
          this.splashState = 'start';
          setTimeout(() => {
            this.isSplashShown = false;
          }, 300);
        }, 3000);
      });
    this.videoHomeRef.nativeElement.addEventListener('ended', this.onSplashVideoEnded);
  }

  ngOnDestroy() {
    this.videoHomeRef.nativeElement.removeEventListener('ended', this.onSplashVideoEnded);
  }

  public onSplashVideoEnded = () => {
    this.splashState = 'start';
    setTimeout(() => {
      this.isSplashShown = false;
    }, 300);
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
