import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Movie } from '../../interfaces/movies-results';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterContentInit {

  @Input() movies: Movie[];

  constructor() { }

  ngAfterContentInit():void{
    const mySwiper = new Swiper('.swiper-container', {
      // Optional parameters     
      loop: true,
    })
  }

  ngOnInit(): void {
    console.log(this.movies);
    
  }

}
