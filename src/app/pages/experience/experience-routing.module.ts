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
    title: 'Experiences - Linh Amber\'s Design',
    children: [
      {
        path: 'bao-son',
        loadChildren: () => import('./components/experience-bao-son/experience-bao-son.routing.module')
          .then(m => m.ExperienceBaoSonRoutingModule),
      },
      {
        path: 'edu-pass',
        component: ExperienceEduPassComponent,
        title: 'EduPass - Linh Amber\'s Design',
      },
      {
        path: 'elise',
        loadChildren: () => import('./components/experience-elise/experience-elise.routing.module')
          .then(m => m.ExperienceEliseRoutingModule),
      },
      {
        path: 'hat-dau-nho',
        component: ExperienceHatDauNhoComponent,
        title: 'Hat Dau Nho - Linh Amber\'s Design',
      },
      {
        path: 'hologram',
        component: ExperienceHologramComponent,
        title: 'Hologram - Linh Amber\'s Design',
      },
      {
        path: 'ime',
        component: ExperienceImeComponent,
        title: 'IME - Linh Amber\'s Design',
      },
      {
        path: 'lysilk',
        component: ExperienceLysilkComponent,
        title: 'Lysilk - Linh Amber\'s Design',
      },
      {
        path: 'other-projects',
        component: ExperienceOtherProjectsComponent,
        title: 'Other Projects - Linh Amber\'s Design',
      },
      {
        path: 'personal-projects',
        component: ExperiencePersonalProjectsComponent,
        title: 'Personal Projects - Linh Amber\'s Design',
      },
      {
        path: 'photo',
        component: ExperiencePhotoComponent,
        title: 'Photo - Linh Amber\'s Design',
      },
      {
        path: 'rossie',
        component: ExperienceRossieComponent,
        title: 'Rossie - Linh Amber\'s Design',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperienceRoutingModule {}
