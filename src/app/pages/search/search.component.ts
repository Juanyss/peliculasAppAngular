import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movies-results';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  searchValue:String;
  movies: Movie[] = [];

  constructor( private activatedRoute: ActivatedRoute,
                private _moviesService: MoviesService) {
    this.activatedRoute.params.subscribe(params => {
      this.searchValue = params.text;
      this._moviesService.getMoviesSearch(params.text).subscribe(movies => {
        this.movies = movies
        
      })
      
    })
   }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this._moviesService.resetPage();
  }

}
