import {RouterModule, Routes} from '@angular/router';
import {HeroeComponent} from './component/heroe.component';


const HeroeRoutes: Routes = [
  { path: '', component: HeroeComponent },
  { path: '**', redirectTo: '/heroes' }
];

export const HeroeRouting = RouterModule.forChild(HeroeRoutes);
