import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ImageViewerComponent} from "../../../../components/image-viewer/image-viewer.component";

@Component({
  selector: 'app-experience-hologram',
  standalone: true,
  templateUrl: 'experience-hologram.component.html',
  styleUrls: ['experience-hologram.component.scss'],
  imports: [CommonModule, ImageViewerComponent]
})
export class ExperienceHologramComponent {

}
