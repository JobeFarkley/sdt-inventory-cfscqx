import { Injectable } from "@angular/core";
import { USERS } from "./mock-data";
import { User } from "./model/user";

@Injectable()
export class LoginService {
  userList: User[] = USERS;
  constructor() {}
}
