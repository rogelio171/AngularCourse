import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  places: any = [
    {id: 1, plan: 'free', nearness: 1, distance: 1, active: true, name: 'Flowers House'},
    {id: 2, plan: 'paid', nearness: 1, distance: 1.5, active: true, name: 'Kryspy Kreme'},
    {id: 3, plan: 'free', nearness: 2, distance: 2.3, active: true, name: 'Swagger Petstore'},
    {id: 4, plan: 'free', nearness: 2, distance: 5.7, active: false, name: 'Little Caesars'},
    {id: 5, plan: 'paid', nearness: 2, distance: 10, active: false, name: 'Sams'},
    {id: 6, plan: 'paid', nearness: 3, distance: 24, active: true, name: 'Best Buy'}
  ];

  lat = 20.6118227;
  lng = -103.4108922;

  constructor() { }

  ngOnInit() {
  }

}
