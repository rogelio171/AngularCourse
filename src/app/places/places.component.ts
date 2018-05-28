import { Component, OnInit } from '@angular/core';
import {PlacesService} from '../services/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  places = null;

  lat = 20.6118227;
  lng = -103.4108922;

  constructor(private placesServices: PlacesService) {
    this.places = placesServices.getPlaces();
  }

  ngOnInit() {
  }

}
