import { AboutComponent } from './../components/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailComponent } from '../components/film-detail/film-detail.component';
import {FilmsComponent} from '../components/films/films.component';
import { SearchMenuComponent } from '../components/search-menu/search-menu.component';

const routes: Routes = [
	{ path: 'films/:id', component: FilmDetailComponent },
	{ path: 'films', component: FilmsComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'home', component: FilmsComponent },
	{ path: 'films/:id', component: SearchMenuComponent },
	{ path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
