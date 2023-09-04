import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ImageViewerComponent} from "../../../../components/image-viewer/image-viewer.component";

@Component({
  selector: 'app-experience-photo',
  standalone: true,
  templateUrl: 'experience-photo.component.html',
  styleUrls: ['experience-photo.component.scss'],
  imports: [CommonModule, ImageViewerComponent]
})
export class ExperiencePhotoComponent {

}
