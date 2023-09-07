import {ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ExperienceCardComponent} from "./components/experience-card/experience-card.component";
import {ExperienceList} from "../../constants/experience.constants";
import {NavigationEnd, Router, RouterLink, RouterOutlet} from "@angular/router";
import {filter, Subject, takeUntil} from "rxjs";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {IExperienceListItem} from "../../models/experience.model";

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: 'experience.component.html',
  styleUrls: ['experience.component.scss'],
  imports: [CommonModule, ExperienceCardComponent, RouterOutlet, RouterLink],
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
export class ExperienceComponent implements OnInit, OnDestroy {
  public readonly experienceList = ExperienceList;
  public showDetail = false;
  public detailTriggerState = 'start';

  private destroy$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit() {
    this.showDetail = !this.router.url.endsWith('experience');
    this.detailTriggerState = !this.router.url.endsWith('experience') ? 'end' : 'start';

    this.router.events
      .pipe(
        filter(value => value instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (routeEvent: NavigationEnd) => {
          if (!routeEvent.url.endsWith('experience')) {
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

  public onDetailCardClick(item: IExperienceListItem) {
    this.showDetail = true;
    setTimeout(() => {
      this.detailTriggerState = 'end';
      this.router.navigate([item.url]).then();
    }, 50);
  }
}
