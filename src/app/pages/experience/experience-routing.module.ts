import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ExperienceComponent} from "./experience.component";
import {
  ExperiencePersonalProjectsComponent
} from "./components/experience-personal-projects/experience-personal-projects.component";
import {ExperienceHologramComponent} from "./components/experience-hologram/experience-hologram.component";
import {ExperienceBaoSonComponent} from "./components/experience-bao-son/experience-bao-son.component";
import {ExperienceEduPassComponent} from "./components/experience-edu-pass/experience-edu-pass.component";
import {ExperienceEliseComponent} from "./components/experience-elise/experience-elise.component";
import {ExperienceHatDauNhoComponent} from "./components/experience-hat-dau-nho/experience-hat-dau-nho.component";
import {ExperienceImeComponent} from "./components/experience-ime/experience-ime.component";
import {ExperienceLysilkComponent} from "./components/experience-lysilk/experience-lysilk.component";
import {
  ExperienceOtherProjectsComponent
} from "./components/experience-other-projects/experience-other-projects.component";
import {ExperiencePhotoComponent} from "./components/experience-photo/experience-photo.component";
import {ExperienceRossieComponent} from "./components/experience-rossie/experience-rossie.component";

const routes: Routes = [
  {
    path: '',
    component: ExperienceComponent,
    children: [
      {
        path: 'bao-son',
        component: ExperienceBaoSonComponent,
      },
      {
        path: 'edu-pass',
        component: ExperienceEduPassComponent,
      },
      {
        path: 'elise',
        component: ExperienceEliseComponent,
      },
      {
        path: 'hat-dau-nho',
        component: ExperienceHatDauNhoComponent,
      },
      {
        path: 'hologram',
        component: ExperienceHologramComponent,
      },
      {
        path: 'ime',
        component: ExperienceImeComponent,
      },
      {
        path: 'lysilk',
        component: ExperienceLysilkComponent,
      },
      {
        path: 'other-projects',
        component: ExperienceOtherProjectsComponent,
      },
      {
        path: 'personal-projects',
        component: ExperiencePersonalProjectsComponent,
      },
      {
        path: 'photo',
        component: ExperiencePhotoComponent,
      },
      {
        path: 'rossie',
        component: ExperienceRossieComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperienceRoutingModule {}
