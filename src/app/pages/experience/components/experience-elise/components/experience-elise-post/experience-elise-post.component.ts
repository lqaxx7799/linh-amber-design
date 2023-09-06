import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ImageViewerComponent} from "../../../../../../components/image-viewer/image-viewer.component";

@Component({
  selector: 'app-experience-elise-post',
  templateUrl: 'experience-elise-post.component.html',
  standalone: true,
  imports: [CommonModule, ImageViewerComponent],
})
export class ExperienceElisePostComponent {}
