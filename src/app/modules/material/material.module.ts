import { NgModule } from '@angular/core';
import {MatCard} from '@angular/material/card';
import {MatDialog} from '@angular/material';
import {OVERLAY_PROVIDERS} from '@angular/cdk/overlay';

@NgModule({
  declarations: [ MatCard ],
  exports: [ MatCard ],
  providers: [ OVERLAY_PROVIDERS, MatDialog ]
})
export class MaterialModule { }
