import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import { Config } from './config';
import { HighlightDirective } from './directives/highlight.directive';
import { CountclicksDirective } from './directives/countclicks.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CountclicksDirective
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: Config.GOOGLE_API_KEY
    }),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
