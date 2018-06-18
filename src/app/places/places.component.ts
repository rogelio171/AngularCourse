import { Component, OnInit } from '@angular/core';
import {PlacesService} from '../services/places.service';
import {MatSnackBar} from '@angular/material';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  places = null;

  lat = 20.6118227;
  lng = -103.4108922;

  constructor(private placesServices: PlacesService, private snackBar: MatSnackBar, angularFireAuth: AngularFireAuth) {
    if (angularFireAuth.auth.currentUser) {
      angularFireAuth.auth.currentUser.getIdToken(true)
        .then(token => {
          this.placesServices.getPlaces(token)
            .subscribe(places => {
              this.places = places;
              this.places = Object.keys(this.places).map(key => places[key]);
            }, error => {
              console.log(error);
              this.snackBar.open('Error', error.status + ' ' + error.statusText, {duration: 2000});
            });
        })
        .catch(error => {
          this.snackBar.open('An error was occurred. ', error.status + ' ' + error.statusText, {duration: 2000});
        });
    }
  }

  ngOnInit() {
  }

}
