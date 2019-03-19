import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './component/heroes.component';


const HeroesRoutes: Routes = [
  { path: '', component: HeroesComponent },
  { path: '**', redirectTo: '/heroes' }
];

export const HeroesRouting = RouterModule.forChild(HeroesRoutes);
