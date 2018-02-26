import {AboutComponent} from './../components/about/about.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilmsComponent} from '../components/films/films.component';
import {LoginComponent} from '../components/login/login.component';
import {VideoPageComponent} from '../components/video-page/video-page.component';
import {CanActivateGuard} from "../guards/can-activate/can-activate";
import {FilmDetailComponent} from '../components/film-detail/film-detail.component';

const routes: Routes = [
	{path: 'films/:id', component: FilmDetailComponent, canActivate: [CanActivateGuard]},
	{path: 'films', component: FilmsComponent, canActivate: [CanActivateGuard]},
	{path: 'about', component: AboutComponent, canActivate: [CanActivateGuard]},
	{path: 'home', component: FilmsComponent, canActivate: [CanActivateGuard]},
	{path: 'login', component: LoginComponent},
	{path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
