import {Component, Input} from "@angular/core";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {LazyLoadImageModule} from "ng-lazyload-image";
import {LazyImgDirective} from "../../directives/lazy-img.directive";

@Component({
  selector: 'app-image-viewer',
  templateUrl: 'image-viewer.component.html',
  styleUrls: ['image-viewer.component.scss'],
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, LazyLoadImageModule],
})
export class ImageViewerComponent {
  @Input() src: string;
  @Input() alt = '';
  @Input() imgClass = '';

  private readonly imageViewerFullscreenStyleId = 'imageViewerFullscreenStyle';

  public isFullScreen = false;
  public onViewFullscreen() {
    this.isFullScreen = true;
    if (document.getElementById(this.imageViewerFullscreenStyleId)) {
      return;
    }
    const styleElement = document.createElement('style');
    styleElement.innerHTML = 'body { overflow: hidden; }';
    styleElement.id = this.imageViewerFullscreenStyleId;
    document.body.appendChild(styleElement);
  }

  public onExitFullscreen() {
    this.isFullScreen = false;
    const styleElement = document.getElementById(this.imageViewerFullscreenStyleId);
    if (!styleElement) {
      return;
    }
    styleElement.remove();
  }
}
