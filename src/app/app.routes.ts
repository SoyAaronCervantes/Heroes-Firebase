import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroeComponent} from './components/heroe/heroe.component';

const AppRoutes: Routes = [
  { path: 'heroes', component: HeroesComponent  },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];

export const AppRouting = RouterModule.forRoot(AppRoutes);
