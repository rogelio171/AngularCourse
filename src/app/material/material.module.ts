import { NgModule } from '@angular/core';

import {
  MatDividerModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';

const modules = [
  MatDividerModule,
  MatListModule,
  MatToolbarModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
