import {Component, OnDestroy, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NavigationEnd, Router, RouterLink, RouterOutlet} from "@angular/router";
import {ImageViewerComponent} from "../../../../components/image-viewer/image-viewer.component";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {filter, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-experience-bao-son',
  standalone: true,
  templateUrl: 'experience-bao-son.component.html',
  styleUrls: ['experience-bao-son.component.scss'],
  imports: [CommonModule, RouterLink, ImageViewerComponent, RouterOutlet],
  animations: [
    trigger('slide', [
      state('start', style({
        top: '100vh',
      })),
      state('end', style({
        top: '0',
      })),
      transition('start => end', [
        animate('0.5s ease-in-out'),
      ]),
      transition('end => start', [
        animate('0.5s ease-in-out'),
      ]),
    ]),
  ],
})
export class ExperienceBaoSonComponent implements OnInit, OnDestroy {
  public showDetail = false;
  public detailTriggerState = 'start';

  private destroy$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit() {
    this.showDetail = !this.router.url.endsWith('bao-son');
    this.detailTriggerState = !this.router.url.endsWith('bao-son') ? 'end' : 'start';

    this.router.events
      .pipe(
        filter(value => value instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (routeEvent: NavigationEnd) => {
          if (!routeEvent.url.endsWith('bao-son')) {
            // this.showDetail = true;
          } else {
            this.detailTriggerState = 'start';
            setTimeout(() => {
              this.showDetail = false;
            }, 500);
          }
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onDetailCardClick() {
    this.showDetail = true;
    setTimeout(() => {
      this.detailTriggerState = 'end';
    }, 50);
  }
}
