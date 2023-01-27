import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewUser } from './new-user';

const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(
    private http: HttpClient
  ) { }

  createNewUser(user: NewUser) {
    return this.http.post(`${API}/user/signup`, user)
  }

  checkUser(userName: string) {
    return this.http.get(`${API}/user/exists/${userName}`)
  }
}
