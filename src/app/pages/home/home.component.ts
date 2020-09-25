import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movies-results';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];

  constructor(private _moviesService: MoviesService) { }

  ngOnInit(): void {
    this._moviesService.getMovies().subscribe(movies => {
      
      this.movies = movies.results;
    })
  }

}
