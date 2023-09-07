import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {CommonModule} from "@angular/common";
import {IExperienceListItem} from "../../../../models/experience.model";
import {RouterModule} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";

const positions = ['Left', 'Right', 'Top', 'Bottom'];

@Component({
  selector: 'app-experience-card',
  templateUrl: 'experience-card.component.html',
  styleUrls: ['experience-card.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
  animations: [
    trigger('slide', [
      state('startLeft', style({
        left: '-100%',
      })),
      state('endLeft', style({
        left: '0',
      })),
      state('startRight', style({
        right: '-100%',
      })),
      state('endRight', style({
        right: '0',
      })),
      state('startTop', style({
        top: '-100%',
      })),
      state('endTop', style({
        top: '0',
      })),
      state('startBottom', style({
        bottom: '-100%',
      })),
      state('endBottom', style({
        bottom: '0',
      })),
      transition('* => *', [
        animate('0.5s ease-in-out'),
      ]),
    ]),
  ],
})
export class ExperienceCardComponent {
  public imageState: string;
  public position: string;
  @Input() item: IExperienceListItem;

  @Output() click = new EventEmitter<MouseEvent>();

  constructor() {
    this.position = positions[Math.floor(Math.random() * 4)];
    this.imageState = 'start' + this.position;
  }

  public onImageLoaded() {
    const timeout = Math.random() * (50 - 20) + 20;
    setTimeout(() => {
      this.imageState = 'end' + this.position;
    }, timeout * 50);
  }

  public onClick(event: MouseEvent) {
    this.click.emit(event);
  }
}
