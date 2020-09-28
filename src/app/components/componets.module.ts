import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    NavBarComponent,
    SlideshowComponent,
    MoviesPosterGridComponent,
  ],
  exports: [NavBarComponent, SlideshowComponent, MoviesPosterGridComponent],
  imports: [CommonModule, RouterModule, RatingModule, PipesModule],
})
export class ComponetsModule {}
