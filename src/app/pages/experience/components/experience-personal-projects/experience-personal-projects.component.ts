import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ImageViewerComponent} from "../../../../components/image-viewer/image-viewer.component";

@Component({
  selector: 'app-experience-personal-projects',
  standalone: true,
  templateUrl: 'experience-personal-projects.component.html',
  styleUrls: ['experience-personal-projects.component.scss'],
  imports: [CommonModule, ImageViewerComponent]
})
export class ExperiencePersonalProjectsComponent {

}
