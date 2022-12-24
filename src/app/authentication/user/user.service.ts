import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { User } from './user'
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>({})

  constructor(private tokenService: TokenService) {
    if (this.tokenService.hasToken()) {
      this.decodifyJWT()
    }
  }

  private decodifyJWT() {
    const token = this.tokenService.getToken()
    const user = jwt_decode(token) as User
    this.userSubject.next(user)
  }

  getUser() {
    return this.userSubject.asObservable()
  }

  setToken(token: string) {
    this.tokenService.setToken(token)
    this.decodifyJWT()
  }

  logout() {
    this.tokenService.deleteToken()
    this.userSubject.next({})
  }

  hasLogged() {
    return this.tokenService.hasToken()
  }
}
