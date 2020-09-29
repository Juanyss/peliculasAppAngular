import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cast, CastElement } from '../../interfaces/cast-movie';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slide',
  templateUrl: './cast-slide.component.html',
  styleUrls: ['./cast-slide.component.css']
})
export class CastSlideComponent implements OnInit,AfterViewInit {

  @Input() cast: CastElement[];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{
    const swiper = new Swiper('.swiper-container',{
      slidesPerView: 5.3,
      freeMode:true,
      spaceBetween:15
    })
  }

}
