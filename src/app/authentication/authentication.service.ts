import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) { }

  authenticate(user: string, password: string): Observable<HttpResponse<any>> {
    debugger
    return this.httpClient.post('http://localhost:3000/user/login', {
        userName: user,
        password: password},
        {observe: 'response'}
      ).pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-token') ?? ''
          this.userService.setToken(authToken)
        })
      )
  }
}
