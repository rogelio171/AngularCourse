import { Component, OnInit } from '@angular/core';
import {PlacesService} from '../services/places.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  place: any = {};

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
  }

  savePlace() {
    const address = this.place.address + ',' + this.place.city + ',' + this.place.country;

    this.placesService.getGeoData(address)
      .subscribe(result => {
        this.place.lat = result['results'][0].geometry.location.lat;
        this.place.lng = result['results'][0].geometry.location.lng;
        this.place.id = Date.now();
        this.placesService.savePlace(this.place);
        alert('Saved Successfully');
        this.place = {};
      });
  }

}
