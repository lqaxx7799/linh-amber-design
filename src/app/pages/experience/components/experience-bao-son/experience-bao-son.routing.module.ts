import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ExperienceBaoSonComponent} from "./experience-bao-son.component";
import {ExperienceBaoSon1Component} from "./components/experience-bao-son-1/experience-bao-son-1.component";
import {ExperienceBaoSon2Component} from "./components/experience-bao-son-2/experience-bao-son-2.component";
import {ExperienceBaoSon3Component} from "./components/experience-bao-son-3/experience-bao-son-3.component";
import {ExperienceBaoSon4Component} from "./components/experience-bao-son-4/experience-bao-son-4.component";

const routes: Routes = [
  {
    path: '',
    component: ExperienceBaoSonComponent,
    children: [
      {
        path: '1',
        component: ExperienceBaoSon1Component,
      },
      {
        path: '2',
        component: ExperienceBaoSon2Component,
      },
      {
        path: '3',
        component: ExperienceBaoSon3Component,
      },
      {
        path: '4',
        component: ExperienceBaoSon4Component,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperienceBaoSonRoutingModule {}
