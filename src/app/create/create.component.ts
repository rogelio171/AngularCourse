import { Component, OnInit } from '@angular/core';
import {PlacesService} from '../services/places.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  place: any = {};
  id: any = null;
  view: any = null;
  constructor(private placesService: PlacesService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.params['id'];
    if (this.id !== 'new') {
      this.view = 'Edit'
      this.placesService.findPlace(this.id)
        .valueChanges()
        .subscribe(place => {
          this.place = place;
        });
    } else {
      this.view = 'Create';
    }
  }

  ngOnInit() {
  }

  savePlace() {
    const address = this.place.address + ',' + this.place.city + ',' + this.place.country;

    this.placesService.getGeoData(address)
      .subscribe(result => {
        this.place.lat = result['results'][0].geometry.location.lat;
        this.place.lng = result['results'][0].geometry.location.lng;

        if (this.id !== 'new') {
          this.placesService.editPlace(this.place);
          alert('Edited Successfully');
        } else {
          this.place.id = Date.now();
          this.placesService.savePlace(this.place);
          alert('Saved Successfully');
        }
        this.place = {};
        this.router.navigate(['/places']);
      });
  }

}
