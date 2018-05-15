import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import {Config} from './config';
import {HighlightDirective} from './directives/highlight.directive';
import {CountclicksDirective} from './directives/countclicks.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule, Routes} from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { PlacesComponent } from './places/places.component';

const appRoutes: Routes = [
  {path: '', component: PlacesComponent},
  {path: 'places', component: PlacesComponent},
  {path: 'details/:id', component: DetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CountclicksDirective,
    DetailComponent,
    PlacesComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: Config.GOOGLE_API_KEY
    }),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
