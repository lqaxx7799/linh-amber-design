import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ImageViewerComponent } from "src/app/components/image-viewer/image-viewer.component";

@Component({
  selector: 'app-experience-jewelry',
  templateUrl: 'experience-jewelry.component.html',
  styleUrls: ['experience-jewelry.component.scss'],
  standalone: true,
  imports: [CommonModule, ImageViewerComponent],
})
export class ExperienceJewelryComponent {

}