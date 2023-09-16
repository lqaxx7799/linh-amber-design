import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ExperienceEliseComponent} from "./experience-elise.component";
import {ExperienceEliseAdsComponent} from "./components/experience-elise-ads/experience-elise-ads.component";
import {ExperienceEliseCoverComponent} from "./components/experience-elise-cover/experience-elise-cover.component";
import {ExperienceEliseEcomComponent} from "./components/experience-elise-ecom/experience-elise-ecom.component";
import {ExperienceElisePostComponent} from "./components/experience-elise-post/experience-elise-post.component";
import {ExperienceEliseAppComponent} from "./components/experience-elise-app/experience-elise-app.component";

const routes: Routes = [
  {
    path: '',
    component: ExperienceEliseComponent,
    title: 'Elise - Linh Amber\'s Design',
    children: [
      {
        path: 'ads',
        component: ExperienceEliseAdsComponent,
        title: 'Elise Ads - Linh Amber\'s Design',
      },
      {
        path: 'app',
        component: ExperienceEliseAppComponent,
        title: 'Elise Mess - Linh Amber\'s Design',
      },
      {
        path: 'cover',
        component: ExperienceEliseCoverComponent,
        title: 'Elise Cover - Linh Amber\'s Design',
      },
      {
        path: 'ecom',
        component: ExperienceEliseEcomComponent,
        title: 'Elise Ecom - Linh Amber\'s Design',
      },
      {
        path: 'post',
        component: ExperienceElisePostComponent,
        title: 'Elise Post - Linh Amber\'s Design',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperienceEliseRoutingModule {}
