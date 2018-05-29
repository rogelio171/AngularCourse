import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  places: any = [
    {id: 1, plan: 'free', nearness: 1, distance: 1, active: true, name: 'Flowers House', description: 'Flower'},
    {id: 2, plan: 'paid', nearness: 1, distance: 1.5, active: true, name: 'Kryspy Kreme', description: 'Donuts'},
    {id: 3, plan: 'free', nearness: 2, distance: 2.3, active: true, name: 'Swagger Petstore', description: 'API Framework'},
    {id: 4, plan: 'free', nearness: 2, distance: 5.7, active: false, name: 'Little Caesars', description: 'Pizza'},
    {id: 5, plan: 'paid', nearness: 2, distance: 10, active: false, name: 'Sams', description: 'Retail warehouse'},
    {id: 6, plan: 'paid', nearness: 3, distance: 24, active: true, name: 'Best Buy', description: 'Consumer electronics'}
  ];

  constructor(private angularFireDatabase: AngularFireDatabase, private http: HttpClient) { }

  public getPlaces() {
    return this.angularFireDatabase.list('places');
  }

  findPlace(id) {
    return this.places.find(place =>
      Number(place.id) === Number(id)
    ) || null;
  }

  public savePlace(place) {
    console.log(place);
    this.angularFireDatabase.database.ref('places/' + place.id).set(place);
  }

  public getGeoData(address) {
    // http://maps.google.com/maps/api/geocode/json?address=Periferico%208110,%20Tlaquepaque,%20Mexico
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + address);
  }

}
