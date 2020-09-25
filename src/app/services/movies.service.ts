import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesResponse } from '../interfaces/movies-results';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<MoviesResponse>{
    return this.http.get<MoviesResponse>(' https://api.themoviedb.org/3/movie/now_playing?api_key=241a12be1865f38e396641be53780616&language=en-US&page=1')
  }
}
