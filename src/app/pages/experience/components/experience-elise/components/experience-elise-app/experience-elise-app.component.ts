import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ImageViewerComponent} from "../../../../../../components/image-viewer/image-viewer.component";

@Component({
  selector: 'app-experience-elise-app',
  templateUrl: 'experience-elise-app.component.html',
  standalone: true,
  imports: [CommonModule, ImageViewerComponent],
})
export class ExperienceEliseAppComponent {}
