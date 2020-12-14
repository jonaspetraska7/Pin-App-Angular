import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pin-app';

  constructor(private _auth: AuthService){}
  loggedIn(){
    return this._auth.loggedIn();
  }
}
