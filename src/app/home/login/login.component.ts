import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: string = ''
  password: string = ''

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.authenticate(this.user, this.password)
      .subscribe(() => {
        console.log('Autenticado com sucesso.')
      },
      err => {
        alert('Usuário ou senha inválido')
        console.log(err)
      })
  }

}
