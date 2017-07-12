import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from "app/Login/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(public authService: AuthService, public router: Router) {
    }
    canActivate() {
        if (this.authService.user) {
            return true;
        } else {
            this.router.navigate(['login']);
        }
    }
}