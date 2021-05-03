import { Injectable } from "@angular/core";
import { USERS } from "./mock-data";
import { User } from "./model/user";

@Injectable()
export class LoginService {
  /**List of recognised Users */
  userList: User[] = USERS;

  /** Currently logged in user */ 
  loggedIn: User;

  constructor() {}

  /** Call this to change the currently user loggedIn */
  logIn(username: string, password: string){
    var i = this.findUser(username);
    if(i == -1){
      this.logInError();
    }
    else if(this.userList[i].password == password){
      this.loggedIn = this.userList[i];
      if(this.loggedIn != null){
        console.log(this.loggedIn.username + " logged in.")
      }
    }
    else this.logInError();
  }

  /**Returns loggedIn user to null */
  logOut(){
    this.loggedIn = null;
    if(this.loggedIn == null){
      console.log("User successfully logged out.")
    }
  }

  /** Finds user by username and returns their index on the userList */
  findUser(username: string){
    for(var i = 0; i < this.userList.length; i++){
      if(this.userList[i].username == username){
        return i;
      }
    }
    return -1;
  }

  /**Error for when the username or password is incorect.
   * Currently just sends a message to the console.
   */
  logInError(){
    console.log("Invalid username or password");
  }
}

