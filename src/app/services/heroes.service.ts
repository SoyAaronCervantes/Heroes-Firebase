import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Heroe} from '../interfaces/heroe.interface';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private readonly url: string;
  private readonly urlHeroe: string;
  private readonly headers: HttpHeaders;
  constructor(
    private httpClient: HttpClient
  ) {
    this.url = 'https://heroes-firebase-22089.firebaseio.com/heroes.json';
    this.urlHeroe = 'https://heroes-firebase-22089.firebaseio.com/heroes';
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  postHeroe( heroe: Heroe) {
    const body = JSON.stringify(heroe);
    return this.httpClient.post(this.url, body, { headers: this.headers })
      .pipe(
        map( res => {
          console.log(res);
          return res;
        })
      );
  }

  putHeroe( heroe: Heroe, key$: string ) {
    const body = JSON.stringify(heroe);
    const url = `${this.urlHeroe}/${key$}.json`;
    return this.httpClient.put(url, body, { headers: this.headers });
  }

  getHeroe( key$: string ) {
    const url = `${this.urlHeroe}/${key$}.json`;
    return this.httpClient.get(url, {headers: this.headers});
  }

  getHeroes() {
    return this.httpClient.get(this.url, { headers: this.headers }).pipe(
      map( res => {
        return res;
      })
    );
  }

  deleteHeroe( key$: string ) {
    const url = `${this.urlHeroe}/${key$}.json`;
    return this.httpClient.delete(url, {headers: this.headers});
  }

}
