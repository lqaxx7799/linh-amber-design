import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ExperienceEliseComponent} from "./experience-elise.component";
import {ExperienceEliseAdsComponent} from "./components/experience-elise-ads/experience-elise-ads.component";
import {ExperienceEliseCoverComponent} from "./components/experience-elise-cover/experience-elise-cover.component";
import {ExperienceEliseEcomComponent} from "./components/experience-elise-ecom/experience-elise-ecom.component";
import {ExperienceElisePostComponent} from "./components/experience-elise-post/experience-elise-post.component";

const routes: Routes = [
  {
    path: '',
    component: ExperienceEliseComponent,
    children: [
      {
        path: 'ads',
        component: ExperienceEliseAdsComponent,
      },
      {
        path: 'cover',
        component: ExperienceEliseCoverComponent,
      },
      {
        path: 'ecom',
        component: ExperienceEliseEcomComponent,
      },
      {
        path: 'post',
        component: ExperienceElisePostComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperienceEliseRoutingModule {}
