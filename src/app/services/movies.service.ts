import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MoviesResponse, Movie } from '../interfaces/movies-results';
import { catchError, map, tap } from 'rxjs/operators';
import { SingleMovie } from '../interfaces/single-movie-result';
import { Cast, CastElement } from '../interfaces/cast-movie';

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
    this.lastMoviesPage = 1;
  }

  getMoviesSearch(movieText: string): Observable<Movie[]> {
    const params = { ...this.params, page: '1', query: movieText };    
    return this.http
      .get<MoviesResponse>(`${this.baseURL}/search/movie`, {
        params,
      })
      .pipe(map((resp) => resp.results));
  }

  getMovie(id:string):Observable<SingleMovie>{
    return this.http.get<SingleMovie>(`${this.baseURL}/movie/${id}`,
    {params:this.params
    }).pipe(catchError(err => of(null)))
  }

  getCast(id:string):Observable<CastElement[]>{
    return this.http.get<Cast>(`${this.baseURL}/movie/${id}/credits`,
    {params:this.params
    }).pipe(map(resp => resp.cast),catchError(err => of([])))
  }
}
