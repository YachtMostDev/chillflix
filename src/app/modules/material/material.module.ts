import { NgModule } from '@angular/core';
import {MatCard} from '@angular/material/card';
import {MatGridList, MatGridTile} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MovieDetailDialogComponent} from '../../components/movie-details/movie-details.component';

@NgModule({
  declarations: [ MatCard, MatGridList, MatGridTile ],
  imports: [ MatDialogModule, BrowserAnimationsModule ],
  exports: [ MatCard, MatGridList, MatGridTile ],
  providers: [ ],
  entryComponents: [MovieDetailDialogComponent]
})
export class MaterialModule { }
