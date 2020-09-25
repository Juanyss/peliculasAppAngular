import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';
import { ComponetsModule } from '../components/componets.module';



@NgModule({
  declarations: [HomeComponent, MovieComponent, SearchComponent],
  imports: [
    CommonModule,
    ComponetsModule,
  ]
})
export class PagesModule { }
