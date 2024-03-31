import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ImageViewerComponent} from "../../../../components/image-viewer/image-viewer.component";

@Component({
  selector: 'app-experience-etude',
  standalone: true,
  templateUrl: 'experience-etude.component.html',
  styleUrls: ['experience-etude.component.scss'],
  imports: [CommonModule, ImageViewerComponent]
})
export class ExperienceEtudeComponent {

}
