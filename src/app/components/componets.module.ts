import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';
import { CastSlideComponent } from './cast-slide/cast-slide.component';



@NgModule({
  declarations: [
    NavBarComponent,
    SlideshowComponent,
    MoviesPosterGridComponent,
    CastSlideComponent,
  ],
  exports: [NavBarComponent, SlideshowComponent, MoviesPosterGridComponent,CastSlideComponent],
  imports: [CommonModule, RouterModule, RatingModule, PipesModule],
})
export class ComponetsModule {}
