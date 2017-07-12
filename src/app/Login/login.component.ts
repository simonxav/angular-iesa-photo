import { Component } from '@angular/core';
import { User } from "app/user";
import { AuthService } from "app/Login/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'login-form',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  public user = new User();
  public submitted = false;

  constructor(public authService: AuthService, public router: Router) {
  }

  public validerFormulaire() {
    this.submitted = true;
    this.authService.login(this.user.username, this.user.password).subscribe(
      (value: boolean) => {
        if (value === true) {
          this.router.navigate(['uploadPhoto']);
        } else {
          console.log('bad credentials');
        }
      }
    )
  }

}
