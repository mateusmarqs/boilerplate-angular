import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lowerCaseValidator } from './lowerCase.validator';
import { NewUser } from './new-user';
import { NewUserService } from './new-user.service';
import { UserExistsService } from './user-exists.service';
import { userNamePasswordEqualValidator } from './user-password-equal.validator';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService,
    private userExistsService: UserExistsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      // VALIDACAO ASSINCRONA DO USERNAME COMO TERCEIRO PARAMETRO DO ARRAY
      userName: ['', [lowerCaseValidator], [this.userExistsService.userExists()]],
      password: ['']
    }, {
      validators: [userNamePasswordEqualValidator]
    })
  }

  createUser() {
  
    if (this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as NewUser

      this.newUserService.createNewUser(newUser)
        .subscribe(() => {
          this.router.navigate([''])
        }, error => {
          console.log(error)
        })
    }
  }

}
