import {AfterViewInit, Component, EventEmitter, Input, NgModule, Output} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss'],
  imports: [CommonModule, RouterLink],
  animations: [
    trigger('fade', [
      state('start', style({
        opacity: 0,
      })),
      state('end', style({
        opacity: 1,
      })),
      transition('start => end', [
        animate('0.2s ease-in-out'),
      ]),
      transition('end => start', [
        animate('0.2s ease-in-out'),
      ]),
    ]),
    trigger('riseUp', [
      state('start', style({
        opacity: 0,
        transform: 'translateY(30px)',
      })),
      state('end', style({
        opacity: 1,
        transform: 'translateY(0)',
      })),
      transition('start => end', [
        animate('0.2s ease-in-out'),
      ]),
      transition('end => start', [
        animate('0.2s ease-in-out'),
      ]),
    ]),
  ],
})
export class MenuComponent implements AfterViewInit {
  public backgroundState = 'start';
  public routeStates = ['start', 'start', 'start'];

  @Input() set isOpen(state: boolean) {
    this._state = state;
    if (!state) {
      setTimeout(async () => {
        for (let i = this.routeStates.length - 1; i >= 0; i--) {
          this.routeStates[i] = 'start';
          await sleep(100);
        }
        await sleep(100);
        this.backgroundState = 'start';
        await sleep(200);
        this.finishClose.emit();
      });
    }
  }

  _state: boolean;

  @Output() finishClose = new EventEmitter<void>();

  constructor(private router: Router) {
  }

  ngAfterViewInit() {
    setTimeout(async () => {
      this.backgroundState = 'end';
      await sleep(200);
      for (let i = 0; i < this.routeStates.length; i++) {
        this.routeStates[i] = 'end';
        await sleep(100);
      }
    });
  }

  public onNavigate(event: MouseEvent, route: string) {
    event.preventDefault();
    setTimeout(async () => {
      for (let i = this.routeStates.length - 1; i >= 0; i--) {
        this.routeStates[i] = 'start';
        await sleep(100);
      }
      await sleep(100);
      this.backgroundState = 'start';
      await sleep(200);
      this.router.navigate([route]).then();
    });
  }
}

function sleep(ms: number) {
  return new Promise((res, rej) => {
    setTimeout(res, ms);
  })
}
