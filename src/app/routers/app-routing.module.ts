import { AboutComponent } from './../components/about/about.component';
import { FilmListComponent } from './../components/film-list/film-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailComponent } from '../components/film-detail/film-detail.component';

const routes: Routes = [
	{ path: 'films/:id', component: FilmDetailComponent },
	{ path: 'films', component: FilmListComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'home', component: FilmListComponent },
	{ path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
