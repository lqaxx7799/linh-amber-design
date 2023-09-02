import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ImageViewerComponent} from "../../../../components/image-viewer/image-viewer.component";

@Component({
  selector: 'app-experience-ime',
  standalone: true,
  templateUrl: 'experience-ime.component.html',
  styleUrls: ['experience-ime.component.scss'],
  imports: [CommonModule, ImageViewerComponent]
})
export class ExperienceImeComponent {

}
