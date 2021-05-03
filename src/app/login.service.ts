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
    var i = findUser(username);
    if(i == -1){
      logInError();
    }
    else if(userList[i].password == password){
      loggedIn = userList[i];
      if(loggedIn != null){
        console.log(loggedIn.username + " logged in.")
      }
    }
    else logInError();
  }

  /**Returns loggedIn user to null */
  logOut(){
    loggedIn = null;
    if(loggedIn == null){
      console.log("User successfully logged out.")
    }
  }

  /** Finds user by username and returns their index on the userList */
  findUser(username: string){
    for(var i = 0; i < userList.length; i++){
      if(userList[i].username == username){
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

