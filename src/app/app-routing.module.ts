import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'experience',
    loadChildren: () => import('./pages/experience/experience-routing.module').then(m => m.ExperienceRoutingModule),
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home-routing.module').then(m => m.HomeRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
