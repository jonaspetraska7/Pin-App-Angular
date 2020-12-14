import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    username: null,
    password: null
  }

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  toRegister() {
    this._router.navigate(['/register']);
  }

  loginUser(){
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          alert("Login successful, Enjoy your content !");
          localStorage.setItem('token', res);
          this._router.navigate(['/themes'])
        },
        err => alert("Login is incorrect, try again")
      )
  }

}
