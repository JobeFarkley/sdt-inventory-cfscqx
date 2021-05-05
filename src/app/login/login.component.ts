import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {UID:0, username: "", firstName: "", lastName:'', password:'', permissions:'none'};

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  logIn(username: string, password: string){
    this.loginService.logIn(username, password)
    this.user = this.loginService.loggedIn;
  }
}