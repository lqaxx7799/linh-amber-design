import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'experience',
    loadChildren: () => import('./pages/experience/experience-routing.module').then(m => m.ExperienceRoutingModule),
  },
  {
    path: 'about-me',
    loadChildren: () => import('./pages/about-me/about-me-routing.module').then(m => m.AboutMeRoutingModule),
    title: 'About me - Linh Amber\'s Design',
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact-routing.module').then(m => m.ContactRoutingModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'experience',
    // loadChildren: () => import('./pages/home/home-routing.module').then(m => m.HomeRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
