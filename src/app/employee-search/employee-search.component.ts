import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {USERS} from '../mock-data';
import {User} from '../model/user';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  users: User[] = USERS;
  selectedUser: User;
  form: FormGroup;
  searchText: string;

  UID: number;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  permissions: string;

  deleteUser(user: User){
       this.users.splice(this.users.indexOf(user),1)
  }
  

  editUser(user: User) {
    this.selectedUser = user;
    this.form = new FormGroup({
      UID: new FormControl(user.UID),
      username: new FormControl(user.username),
      firstName: new FormControl(user.firstName),
      lastName: new FormControl(user.lastName),
      password: new FormControl(user.password),
      permissions: new FormControl(user.permissions),

    });
      
  }

 save() {
    this.selectedUser.UID= this.form.value.DID;
    this.selectedUser.username= this.form.value.username;
    this.selectedUser.firstName= this.form.value.firstName;
    this.selectedUser.lastName= this.form.value.lastName;
    this.selectedUser.password= this.form.value.password;
    this.selectedUser.permissions= this.form.value.permissions;

    this.cancel();
  }

  cancel() {
    this.selectedUser = null;
    this.form = null;
  }




}