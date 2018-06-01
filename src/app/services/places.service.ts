import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  API_ENDPOINT = 'https://ninesquare-1525573127364.firebaseio.com';

  constructor(private angularFireDatabase: AngularFireDatabase, private http: HttpClient) { }

  public getPlaces() {
    // return this.angularFireDatabase.list('places');
    return this.http.get(this.API_ENDPOINT + '/.json')
      .map( res => {
        const data = res['places'];
        return data;
      });
  }

  public findPlace(id) {
    return this.angularFireDatabase.object('places/' + id);
  }

  public editPlace(place) {
    console.log(place);
    // more code in the future
    this.angularFireDatabase.database.ref('places/' + place.id).set(place);
  }

  public savePlace(place) {
    console.log(place);
    // this.angularFireDatabase.database.ref('places/' + place.id).set(place);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(this.API_ENDPOINT + '/places.json', place, httpOptions)
      .subscribe(
        res => {
          console.log(res);
        }, error => {
          console.log(error);
        }
      );
  }

  public getGeoData(address) {
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + address);
  }

}
