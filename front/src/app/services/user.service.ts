import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly URL_API = 'http://localhost:3000/api/user';
  constructor(private userHttp: HttpClient) { }

  createNewUser(uid) {
    return this.userHttp.post(this.URL_API+'/register', {"uid": uid});
  }

  getUserData(uid) {
    return this.userHttp.get<User>(this.URL_API+'/user/' + uid);
  }
}
