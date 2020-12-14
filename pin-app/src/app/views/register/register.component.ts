import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {
    username: null,
    password: null
  }

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  toLogin() {
    this._router.navigate(['/login']);
  }

  registerUser(){
    this._auth.registerUser(this.registerUserData)
        .subscribe(
        res => console.log(res),
        err => {
          if (err.status == 201){
            alert("Register successful, please Log In ");
            this._router.navigate(['/login'])
          }
          else{
            alert("User Already Exists, try a different username ;)");
          }
        }
      )
  }
}
