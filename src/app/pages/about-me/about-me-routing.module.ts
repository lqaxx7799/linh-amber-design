import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AboutMeComponent} from "./about-me.component";

const routes: Routes = [
  {
    path: '',
    component: AboutMeComponent,
    title: 'About Me - Linh Amber\'s Design',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutMeRoutingModule {}
