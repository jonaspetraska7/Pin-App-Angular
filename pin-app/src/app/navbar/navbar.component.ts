import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAdmin = null;

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
    this.isAdmin = this._auth.isAdmin();
  }

  logout(){
    this._auth.logoutUser();
  }

}
