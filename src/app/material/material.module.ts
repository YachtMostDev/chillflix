import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule, MatProgressSpinnerModule, MatSidenav, MatFormFieldModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material';

const MATERIAL_MODULES = [
	MatCardModule,
	MatDialogModule,
	BrowserAnimationsModule,
	MatButtonModule,
	MatIconModule,
	MatToolbarModule,
	MatListModule,
	MatTooltipModule,
	MatProgressSpinnerModule,
	MatSidenavModule,
	MatChipsModule,
	MatFormFieldModule,
	MatInputModule,
	MatDatepickerModule,
	MatNativeDateModule
];

@NgModule({
	imports: MATERIAL_MODULES,
	exports: MATERIAL_MODULES,
	declarations: []
})
export class Material {
}
