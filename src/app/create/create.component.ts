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
    this.placesService.savePlace(this.place);
  }

}
