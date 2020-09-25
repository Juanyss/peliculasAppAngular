import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';



@NgModule({
  declarations: [NavBarComponent, SlideshowComponent],
  exports: [NavBarComponent,SlideshowComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponetsModule { }
