import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MoviesResponse, Movie } from '../interfaces/movies-results';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseURL: string = 'https://api.themoviedb.org/3';
  private lastMoviesPage: number = 1;
  public loading: boolean = false;

  constructor(private http: HttpClient) {}

  get params() {
    return {
      api_key: '241a12be1865f38e396641be53780616',
      language: 'en-US',
      page: this.lastMoviesPage.toString(),
    };
  }

  getMovies(): Observable<Movie[]> {
    if (this.loading) {
      return of([]);
    }

    this.loading = true;
    return this.http
      .get<MoviesResponse>(`${this.baseURL}/movie/now_playing`, {
        params: this.params,
      })
      .pipe(
        map((resp) => resp.results),
        tap(() => {
          (this.lastMoviesPage += 1), (this.loading = false);
        })
      );
  }

  resetPage(){
    
  }

  getMoviesSearch(movieText: string): Observable<Movie[]> {
    const params = { ...this.params, page: '1', query: movieText };
    //api.themoviedb.org/3/search/movie
    return this.http
      .get<MoviesResponse>(`${this.baseURL}/search/movie`, {
        params,
      })
      .pipe(map((resp) => resp.results));
  }
}
