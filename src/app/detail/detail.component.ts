import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  places: any = [
    {id: 1, plan: 'free', nearness: 1, distance: 1, active: true, name: 'Flowers House', description: 'Flower'},
    {id: 2, plan: 'paid', nearness: 1, distance: 1.5, active: true, name: 'Kryspy Kreme', description: 'Donuts'},
    {id: 3, plan: 'free', nearness: 2, distance: 2.3, active: true, name: 'Swagger Petstore', description: 'API Framework'},
    {id: 4, plan: 'free', nearness: 2, distance: 5.7, active: false, name: 'Little Caesars', description: 'Pizza'},
    {id: 5, plan: 'paid', nearness: 2, distance: 10, active: false, name: 'Sams', description: 'Retail warehouse'},
    {id: 6, plan: 'paid', nearness: 3, distance: 24, active: true, name: 'Best Buy', description: 'Consumer electronics'}
  ];

  id = null;
  place: any = {};

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.queryParams);
    console.log(this.route.snapshot.queryParams['action']);
    console.log(this.route.snapshot.queryParams['referer']);
    this.id = this.route.snapshot.params['id'];
    this.place = this.findPlace();
  }

  ngOnInit() {
  }

  findPlace() {
    return this.places.find(place =>
      Number(place.id) === Number(this.id)
    ) || null;
  }

}
