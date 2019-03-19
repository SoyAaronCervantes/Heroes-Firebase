import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {Heroe} from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: any;
  loading: boolean;
  constructor( private heroesService: HeroesService ) {
    this.heroes = [];
    this.loading = true;
  }

  ngOnInit() {
    this.heroesService.getHeroes().subscribe(
      res => this.heroes = res,
      err => console.error(err),
      () => this.loading = false
    );
  }
  removeHeroe(key: string, index: number) {
    this.heroesService.deleteHeroe(key).subscribe(
      res => res,
      err => console.error(err),
      () => {
        delete this.heroes[key];
      }
    );
  }
}
