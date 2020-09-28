import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Movie } from '../../interfaces/movies-results';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css']
})
export class MoviesPosterGridComponent implements OnInit, AfterViewInit {
  
  @Input()
  movies:Movie[] = [];

  constructor() { }

  ngOnInit(): void {    
  }

  ngAfterViewInit():void{
    
  }

}
