import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  places: any = [
    {active: true, name: 'Flowers House'},
    {active: true, name: 'Kryspy Kreme'},
    {active: true, name: 'Swagger Petstore'},
    {active: false, name: 'Little Caesars'},
    {active: false, name: 'Sams'},
    {active: true, name: 'Best Buy'}
  ];

  lat = 20.6118227;
  lng = -103.4108922;

}
