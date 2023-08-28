import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ExperienceCardComponent} from "./components/experience-card/experience-card.component";

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: 'experience.component.html',
  styleUrls: ['experience.component.scss'],
  imports: [CommonModule, ExperienceCardComponent]
})
export class ExperienceComponent {

}
