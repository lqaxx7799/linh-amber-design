import {Component, OnDestroy, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {filter, Subject, takeUntil} from "rxjs";
import {NavigationEnd, Router, RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-experience-hologram',
  standalone: true,
  templateUrl: 'experience-elise.component.html',
  styleUrls: ['experience-elise.component.scss'],
  imports: [CommonModule, RouterOutlet, RouterLink],
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
export class ExperienceEliseComponent implements OnInit, OnDestroy {
  public showDetail = false;
  public detailTriggerState = 'start';

  private destroy$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit() {
    this.showDetail = !this.router.url.endsWith('elise');
    this.detailTriggerState = !this.router.url.endsWith('elise') ? 'end' : 'start';

    this.router.events
      .pipe(
        filter(value => value instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (routeEvent: NavigationEnd) => {
          if (!routeEvent.url.endsWith('elise')) {
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
