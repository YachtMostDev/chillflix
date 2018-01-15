import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


const MATERIAL_MODULES = [
  MatCardModule,
  MatDialogModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
  declarations: []
})
export class Material { }
