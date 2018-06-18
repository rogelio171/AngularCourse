import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import {Config} from './config';
import {HighlightDirective} from './directives/highlight.directive';
import {CountclicksDirective} from './directives/countclicks.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule, Routes} from '@angular/router';
import {DetailComponent} from './detail/detail.component';
import {PlacesComponent} from './places/places.component';
import {ContactComponent} from './contact/contact.component';
import {PlacesService} from './services/places.service';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import { CreateComponent } from './create/create.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {AuthorizationService} from './services/authorization.service';

const appRoutes: Routes = [
  {path: '', component: PlacesComponent},
  {path: 'places', component: PlacesComponent},
  {path: 'details/:id', component: DetailComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'create/:id', component: CreateComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CountclicksDirective,
    DetailComponent,
    PlacesComponent,
    ContactComponent,
    CreateComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(Config.FIREBASE_CONFIG),
    AgmCoreModule.forRoot({
      apiKey: Config.GOOGLE_API_KEY
    }),
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [PlacesService, AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
