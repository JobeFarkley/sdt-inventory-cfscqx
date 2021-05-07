import { Component, OnInit } from '@angular/core';
import {USERS} from '../mock-data';
import {User} from '../model/user';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  users: User[] = USERS;

  nextUID: number = Math.floor(Math.random() * (999999 - 100000)+ 100000);
  firstName: string;
  lastName: string;
  permissions: number;
  password: string;
  username: string;

  addUser(){
    const newUser: User = {

      UID: +this.nextUID,
      firstName: this.firstName,
      lastName: this.lastName,
      permissions: this.permissions,
      password: this.password,
      username: this.username
    }
    this.users.push(newUser)
  }

}