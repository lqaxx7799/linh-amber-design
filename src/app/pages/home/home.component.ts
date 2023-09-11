import {AfterViewInit, Component, ElementRef, ViewChild} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  imports: [CommonModule],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('videoHome') videoHomeRef: ElementRef;

  ngAfterViewInit() {
    this.videoHomeRef.nativeElement.play();
  }
}
