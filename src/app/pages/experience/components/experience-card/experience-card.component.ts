import {Component, EventEmitter, Input, Output} from "@angular/core";
import {CommonModule} from "@angular/common";
import {IExperienceListItem} from "../../../../models/experience.model";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-experience-card',
  templateUrl: 'experience-card.component.html',
  styleUrls: ['experience-card.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class ExperienceCardComponent {
  @Input() item: IExperienceListItem;

  @Output() click = new EventEmitter<MouseEvent>();

  public onClick(event: MouseEvent) {
    this.click.emit(event);
  }
}
