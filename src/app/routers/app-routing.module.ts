import {AboutComponent} from './../components/about/about.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilmsComponent} from '../components/films/films.component';
import {LoginComponent} from '../components/login/login.component';
import {CanActivateComponent} from "../components/can-activate/can-activate.component";
import {VideoPageComponent} from '../components/video-page/video-page.component';

const routes: Routes = [
	{path: 'films/:id', component: VideoPageComponent, canActivate: [CanActivateComponent]},
	{path: 'films', component: FilmsComponent, canActivate: [CanActivateComponent]},
	{path: 'about', component: AboutComponent, canActivate: [CanActivateComponent]},
	{path: 'home', component: FilmsComponent, canActivate: [CanActivateComponent]},
	{path: 'login', component: LoginComponent},
	{path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
