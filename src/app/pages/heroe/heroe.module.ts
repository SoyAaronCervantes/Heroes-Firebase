import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroeComponent} from './component/heroe.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SpinnerModule} from '../../components/spinner/spinner.module';
import {HeroeRouting} from './heroe.routes';

@NgModule({
  declarations: [
    HeroeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SpinnerModule,
    HeroeRouting
  ]
})
export class HeroeModule { }
