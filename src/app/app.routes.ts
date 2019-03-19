import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './pages/heroes/component/heroes.component';
import {HeroeComponent} from './pages/heroe/component/heroe.component';

const AppRoutes: Routes = [
  { path: 'heroes', loadChildren: './pages/heroes/heroes.module#HeroesModule'  },
  { path: 'heroe/:id', loadChildren: './pages/heroe/heroe.module#HeroeModule' },
  { path: '**', pathMatch: 'full', redirectTo: '/heroes' }
];

export const AppRouting = RouterModule.forRoot(AppRoutes);
