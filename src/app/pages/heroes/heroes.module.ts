import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroesComponent} from './component/heroes.component';
import {SpinnerModule} from '../../components/spinner/spinner.module';
import {HeroesRouting} from './heroes.routes';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    HeroesComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    SpinnerModule,
    HeroesRouting
  ]
})
export class HeroesModule { }
