import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list'
import { MatTooltipModule } from '@angular/material/tooltip'


const MATERIAL_MODULES = [
  MatCardModule,
  MatDialogModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatTooltipModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
  declarations: []
})
export class Material { }
