import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ImageViewerComponent} from "../../../../components/image-viewer/image-viewer.component";

@Component({
  selector: 'app-experience-rossie',
  standalone: true,
  templateUrl: 'experience-rossie.component.html',
  styleUrls: ['experience-rossie.component.scss'],
  imports: [CommonModule, ImageViewerComponent]
})
export class ExperienceRossieComponent {

}
