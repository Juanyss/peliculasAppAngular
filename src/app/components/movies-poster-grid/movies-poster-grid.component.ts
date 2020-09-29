import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Movie } from '../../interfaces/movies-results';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css']
})
export class MoviesPosterGridComponent implements OnInit, AfterViewInit, OnDestroy {
  
  @Input()
  movies:Movie[] = [];

  constructor( private _moviesService:MoviesService,private router:Router,
               ) { }

  ngOnInit(): void {   
    
    
  }

  ngAfterViewInit():void{
    
  }

  ngOnDestroy(){
    this._moviesService.resetPage();
  }

  goToMovie(movie:Movie){
    this.router.navigate(['/movie',movie.id])
  }

}
