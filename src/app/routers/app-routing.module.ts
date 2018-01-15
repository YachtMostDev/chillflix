import { AboutComponent } from './../components/about/about.component';
import { FilmListComponent } from './../components/film-list/film-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
	{ path: 'films/:id', component: FilmListComponent },
	{ path: 'films', component: FilmListComponent },
	{ path: 'about', component: AboutComponent },
	{ path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
