import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private router: Router) {}

  public onSubmit(form: NgForm): void {
    this.loginService.authorization(form.value).subscribe(
      (data) => this.anyWayRequestHandler(form),
      (error) => this.anyWayRequestHandler(form)
    );
  }

  private anyWayRequestHandler(form: NgForm): void {
    localStorage.removeItem('user');
    localStorage.setItem('user', form.value.username);
    form.reset();
    this.router.navigate(['resolution'])
      .then( () => console.log('Переход к резолюции'))
      .catch( (error) => console.log('ошибка', error));
  }


}
