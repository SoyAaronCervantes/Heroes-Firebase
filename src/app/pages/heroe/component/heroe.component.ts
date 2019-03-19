import { Component, OnInit } from '@angular/core';
import {Heroe} from '../../../interfaces/heroe.interface';
import {HeroesService} from '../../../services/heroes.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe: Heroe;
  flagNew: boolean;
  id: string;
  loading: boolean;
  constructor(
    private heroeService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.heroe = { nombre: '', bio: '', casa: 'Marvel' };
    this.flagNew = false;
    this.activatedRoute.params.subscribe( res =>  this.id = res.id );
    this.loading = true;
  }

  ngOnInit() {
    if (this.id !== 'nuevo') {
      this.getHeroe();
    } else {
      this.loading = false;
    }
  }

  saveData() {
    let response;
    if ( this.id === 'nuevo') {
      this.heroeService.postHeroe(this.heroe).subscribe(
        res => response = res,
        err => console.error(err),
        () => this.router.navigate(['/heroes'])
      );
    } else {
      this.heroeService.putHeroe(this.heroe, this.id).subscribe(
        res => console.log(res),
        err => console.error(err),
        () => this.router.navigate(['/heroes'])
      );
    }
  }

  getHeroe() {
    this.heroeService.getHeroe(this.id)
      .subscribe(
      (res: Heroe) => this.heroe = res,
      err => console.error(err),
      () => {
        this.loading = false;
      }
    );
  }

  resetForm(form: NgForm) {
    this.router.navigate(['/heroe', 'nuevo']);
    form.reset({
      casa: 'Marvel'
    });
  }
}
