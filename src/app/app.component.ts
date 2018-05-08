import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NineSquare';

  a = 2;
  b = 3;

  ready = false;

  constructor() {
    setTimeout(() => {
      this.ready = true;
    }, 3000);
  }

}
