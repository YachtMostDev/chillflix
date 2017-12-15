import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MovieDetailDialogComponent} from '../../components/movie-details/movie-details.component';

const MATERIAL_MODULES = [
  MatCardModule,
  MatDialogModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule
];

@NgModule({
  declarations: [ ],
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
  providers: [ ],
  entryComponents: [
    MovieDetailDialogComponent
  ]
})
export class MaterialModule { }
