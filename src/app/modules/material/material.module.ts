import { NgModule } from '@angular/core';
import {MatCard} from '@angular/material/card';
import {MatDialog, MatGridList, MatGridTile} from '@angular/material';

@NgModule({
  declarations: [ MatCard, MatGridList, MatGridTile ],
  exports: [ MatCard, MatGridList, MatGridTile ],
  providers: [ MatDialog ]
})
export class MaterialModule { }
