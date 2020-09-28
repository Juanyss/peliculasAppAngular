import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Movie } from '../../interfaces/movies-results';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[];

  mySwiper:Swiper;
  constructor() { }

  ngAfterViewInit():void{
    this.mySwiper = new Swiper('.swiper-container', {
      // Optional parameters     
      loop: true,
    })
  }

  ngOnInit(): void {   
    
  }

  onSlideNext(){
    this.mySwiper.slideNext();
  }

  onSlidePrev(){
    this.mySwiper.slidePrev();
  }

}
