import { Component, HostListener, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movies-results';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public movies: Movie[] = [];
  public moviesSlideShow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max =
      document.documentElement.scrollHeight || document.body.scrollHeight;

    if (pos > max) {
      if(this,this._moviesService.loading == true){
        return;
      }
      this._moviesService.getMovies().subscribe((movies) => {
        this.moviesSlideShow.push(...movies)
      });
    }
  }

  constructor(private _moviesService: MoviesService) {}

  ngOnInit(): void {
    this._moviesService.getMovies().subscribe((movies) => {
      this.movies = movies;
      this.moviesSlideShow = movies;
    });
  }
}
