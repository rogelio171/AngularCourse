import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  places: any = [
    {plan: 'free', nearness: 1, distance: 1, active: true, name: 'Flowers House'},
    {plan: 'paid', nearness: 1, distance: 1.5, active: true, name: 'Kryspy Kreme'},
    {plan: 'free', nearness: 2, distance: 2.3, active: true, name: 'Swagger Petstore'},
    {plan: 'free', nearness: 2, distance: 5.7, active: false, name: 'Little Caesars'},
    {plan: 'paid', nearness: 2, distance: 10, active: false, name: 'Sams'},
    {plan: 'paid', nearness: 3, distance: 24, active: true, name: 'Best Buy'}
  ];

  lat = 20.6118227;
  lng = -103.4108922;

}
