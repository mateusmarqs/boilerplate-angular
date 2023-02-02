import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';
import { NewUserService } from './new-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserExistsService {

  constructor(
    private newUserService: NewUserService
  ) { }

  // VALIDACAO ASSINCRONA
  userExists() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((userName) => {
          return this.newUserService.checkUser(userName)
        }),
        map((userExist): any => {
          return userExist ? {userExists: true} : null
        }),
        first()
      )
    }
  }
}
