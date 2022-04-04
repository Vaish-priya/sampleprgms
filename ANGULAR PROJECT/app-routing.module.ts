import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvseriesDetailComponent } from './tvseries-detail/tvseries-detail.component';
import { MoviesComponent } from './movies/movies.component';
import {TVSeriesListComponent} from './tvseries-list/tvseries-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{path: 'tvseries' ,component: TVSeriesListComponent},
{path: 'movies' ,component:MoviesComponent},
{path: '' ,redirectTo: '/tvseries',pathMatch:'full'}, 
{ path: 'tvseries/:aired', component: TvseriesDetailComponent },
{ path: "**" ,component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[TVSeriesListComponent,MoviesComponent,PageNotFoundComponent,TvseriesDetailComponent ]