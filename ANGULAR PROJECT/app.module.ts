import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TVSeriesListComponent } from './tvseries-list/tvseries-list.component';
import { MoviesComponent } from './movies/movies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TvseriesDetailComponent } from './tvseries-detail/tvseries-detail.component';

@NgModule({
 declarations: [
    AppComponent,
   routingcomponents,
   PageNotFoundComponent,
   TvseriesDetailComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
