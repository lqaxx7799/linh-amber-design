import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'linh-amber-design';
  public isMenuOpen = false;

  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
