import { Component } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert = {
  type: 'success',
  message: 'This is an success alert',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Care';

  alerts?: Alert;

  constructor() {
    
  }

}
