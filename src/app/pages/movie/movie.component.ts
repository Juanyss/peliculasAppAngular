import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { SingleMovie } from '../../interfaces/single-movie-result';
import { Location } from '@angular/common';
import { CastElement } from '../../interfaces/cast-movie';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie:SingleMovie;
  cast:CastElement[] = [];

  constructor(private activatedRoute:ActivatedRoute,
              private _movieService:MoviesService,
              private location:Location,
              private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    
    combineLatest([
      this._movieService.getMovie(id),
      this._movieService.getCast(id)
    ]).subscribe(([movie,cast]) => {
      if(!movie){
        this.router.navigateByUrl('/home');
        return;
      }
      this.movie = movie;
      this.cast = cast.filter(actor => actor.profile_path !== null);      
      
    })
  }

  goBack(){
    this.location.back()
  }

}
