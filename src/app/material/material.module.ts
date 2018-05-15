import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
