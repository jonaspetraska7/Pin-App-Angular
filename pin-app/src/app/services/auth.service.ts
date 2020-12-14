import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "https://jonpet6nodeapi.herokuapp.com/register"
  private _loginUrl = "https://jonpet6nodeapi.herokuapp.com/login"
  private user = {
    exp: null,
    iat: null,
    role: null,
    user: null
  }

  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }

  logoutUser(){
    localStorage.removeItem('token');
    alert("You have been logged out.");
    this._router.navigate(['/login']);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  isAdmin(){
    this.user = jwtDecode(localStorage.getItem('token'));
    console.log(this.user.role == "admin")
    return (this.user.role == "admin");
  }

  getUsername(){
    this.user = jwtDecode(localStorage.getItem('token'));
    console.log(this.user.user)
    return this.user.user;
  }

}
